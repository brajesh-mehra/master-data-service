import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @MessagePattern('uploadFileToS3')
  async uploadFileToS3(
    @Payload() payload: { filename: string; buffer: string; mimetype: string }
  ) {
    try {
      const result = await this.fileUploadService.uploadFileToS3(payload);
      return result;
    } catch (error) {
      throw new Error(`File upload failed: ${error.message}`);
    }
  }
}