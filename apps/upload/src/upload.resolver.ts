import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UploadDocument } from './models/upload.schema';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { CurrentUser, UserDto } from '@app/common';

@Resolver(() => UploadDocument)
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Mutation(() => UploadDocument)
  createUpload(
    @Args('createUploadInput')
    createUploadInput: CreateUploadDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.uploadService.create(createUploadInput, user._id);
  }

  @Query(() => [UploadDocument], { name: 'uploads' })
  findAll() {
    return this.uploadService.findAll();
  }

  @Query(() => UploadDocument, { name: 'upload' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.uploadService.findOne(id);
  }

  @Mutation(() => UploadDocument)
  removeUpload(@Args('id', { type: () => String }) id: string) {
    return this.uploadService.remove(id);
  }
}
