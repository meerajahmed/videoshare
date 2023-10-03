import { PartialType } from '@nestjs/mapped-types';
import { CreateUploadDto } from './create-upload.dto';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUploadDto extends PartialType(CreateUploadDto) {}
