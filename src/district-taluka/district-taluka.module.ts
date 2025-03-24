import { Module } from '@nestjs/common';
import { DistrictTalukaController } from './district-taluka.controller';
import { DistrictTalukaService } from './district-taluka.service';
import { MongooseModule } from '@nestjs/mongoose';
import { District, DistrictSchema } from '../schemas/district-taluka.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: District.name, schema: DistrictSchema }]),
  ],
  controllers: [DistrictTalukaController],
  providers: [DistrictTalukaService],
  exports: [DistrictTalukaService],
})
export class DistrictTalukaModule {}
