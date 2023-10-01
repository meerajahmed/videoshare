import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: configService.get('AUTH_HOST'),
      port: configService.get(`TCP_PORT`),
    },
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));

  await app.startAllMicroservices();
  await app.listen(configService.get(`HTTP_PORT`));
}
bootstrap();
