import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { UploadRepository } from './upload.repository';

@Injectable()
export class UploadService {
  constructor(private readonly uploadRepository: UploadRepository) {}

  create(createUploadDto: CreateUploadDto) {
    return this.uploadRepository.create({
      ...createUploadDto,
      timestamp: new Date(),
      userId: '1',
    });
  }

  findAll() {
    return this.uploadRepository.find({});
  }

  findOne(_id: string) {
    return this.uploadRepository.findOne({ _id });
  }

  update(_id: string, updateUploadDto: UpdateUploadDto) {
    return this.uploadRepository.findOneAndUpdate(
      { _id },
      { $set: updateUploadDto },
    );
  }

  remove(_id: string) {
    return this.uploadRepository.findOneAndDelete({ _id });
  }
}
