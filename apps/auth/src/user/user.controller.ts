import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserDocument } from './models/user.schema';
import { CurrentUser } from '@app/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }
}
