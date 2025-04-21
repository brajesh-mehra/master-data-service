import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand, S3ClientConfig } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileUploadService {
  private readonly s3Client: S3Client;

  constructor(private configService: ConfigService) {
    const s3ClientConfig: S3ClientConfig = {
      region: this.configService.get<string>('AWS_REGION')!,
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID')!,
        secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY')!,
      },
    };

    this.s3Client = new S3Client(s3ClientConfig);
  }

  async uploadFileToS3(file: { filename: string; buffer: string; mimetype: string }) {
    const { filename, buffer, mimetype } = file;
  
    const command = new PutObjectCommand({
      Bucket: this.configService.get<string>('AWS_BUCKET_NAME')!,
      Key: `uploads/${filename}`,
      Body: Buffer.from(buffer, 'base64'),
      ContentType: mimetype
    });
  
    try {
      const uploadResponse = await this.s3Client.send(command);
  
      const fileUrl = `https://${this.configService.get<string>('AWS_BUCKET_NAME')}.s3.${this.configService.get<string>('AWS_REGION')}.amazonaws.com/uploads/${filename}`;
  
      return {
        message: 'File uploaded successfully',
        fileUrl: fileUrl
      };
    } catch (error) {
      throw new Error(`File upload failed: ${error.message}`);
    }
  }
}