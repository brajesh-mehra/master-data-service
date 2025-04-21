import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';

@Module({
  imports: [ConfigModule],  // <-- Add this line
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class FileUploadModule {}