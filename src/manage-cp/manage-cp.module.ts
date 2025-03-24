import { Module } from '@nestjs/common';
import { ManageCpController } from './manage-cp.controller';
import { ManageCpService } from './manage-cp.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ManageCP, ManageCPSchema } from '../schemas/manage-cp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ManageCP.name, schema: ManageCPSchema }]),
  ],
  controllers: [ManageCpController],
  providers: [ManageCpService],
  exports: [ManageCpService],
})
export class ManageCpModule {}
