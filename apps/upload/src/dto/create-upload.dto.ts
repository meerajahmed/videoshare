import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUploadDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  fileId: string;
}
