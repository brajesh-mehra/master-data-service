import { Module } from '@nestjs/common';
import { ManageCompanyController } from './manage-company.controller';
import { ManageCompanyService } from './manage-company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ManageCompany, ManageCompanySchema } from '../schemas/manage-company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ManageCompany.name, schema: ManageCompanySchema }]),
  ],
  controllers: [ManageCompanyController],
  providers: [ManageCompanyService],
  exports: [ManageCompanyService],
})
export class ManageCompanyModule {}
