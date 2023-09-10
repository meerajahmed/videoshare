import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UploadDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;

  @Prop()
  userId: string;

  @Prop()
  fileId: string;
}

export const UploadSchema = SchemaFactory.createForClass(UploadDocument);
