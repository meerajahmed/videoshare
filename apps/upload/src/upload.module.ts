import { Module } from '@nestjs/common';
import {
  AUTH_SERVICE,
  DatabaseModule,
  HealthModule,
  LoggerModule,
} from '@app/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UploadRepository } from './upload.repository';
import { UploadDocument, UploadSchema } from './models/upload.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { UploadResolver } from './upload.resolver';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UploadDocument.name, schema: UploadSchema },
    ]),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URI')],
            queue: 'auth',
          },
        }),
        inject: [ConfigService],
      },
    ]),
    HealthModule,
  ],
  controllers: [UploadController],
  providers: [UploadService, UploadRepository, UploadResolver],
})
export class UploadModule {}
