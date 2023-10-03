import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDocument } from '@app/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => UserDocument)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserDocument)
  createUser(
    @Args('createUserInput')
    createUserInput: CreateUserDto,
  ) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [UserDocument], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }
}
