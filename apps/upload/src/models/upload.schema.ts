import { AbstractDocument } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
@ObjectType()
export class UploadDocument extends AbstractDocument {
  @Prop()
  @Field()
  timestamp: Date;

  @Prop()
  @Field()
  userId: string;

  @Prop()
  @Field()
  fileId: string;
}

export const UploadSchema = SchemaFactory.createForClass(UploadDocument);
