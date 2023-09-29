import { Module } from '@nestjs/common';
import { DatabaseModule, LoggerModule } from '@app/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDocument, UserSchema } from './models/user.schema';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
    LoggerModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
