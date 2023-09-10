import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UploadDocument } from './models/upload.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UploadRepository extends AbstractRepository<UploadDocument> {
  protected readonly logger = new Logger(UploadRepository.name);
  constructor(
    @InjectModel(UploadDocument.name) uploadModel: Model<UploadDocument>,
  ) {
    super(uploadModel);
  }
}
