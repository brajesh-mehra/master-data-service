import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ManageCompany } from '../schemas/manage-company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class ManageCompanyService {
    constructor(@InjectModel(ManageCompany.name) private companyModel: Model<ManageCompany>) { }

    async create(createCompanyDto: CreateCompanyDto): Promise<ManageCompany> {
        const company = new this.companyModel(createCompanyDto);
        return company.save();
    }

    async findAll(): Promise<ManageCompany[]> {
        return this.companyModel.find({ isActive: true }).exec();
    }
}
