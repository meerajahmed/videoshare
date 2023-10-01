import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createUploadDto: CreateUploadDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.uploadService.create(createUploadDto, user?._id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.uploadService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.uploadService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUploadDto: UpdateUploadDto,
  ) {
    return this.uploadService.update(id, updateUploadDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.uploadService.remove(id);
  }
}
