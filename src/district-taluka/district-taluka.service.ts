import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { District } from '../schemas/district-taluka.schema';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictTalukaService {
    constructor(@InjectModel(District.name) private districtModel: Model<District>) { }

    async create(createDistrictDto: CreateDistrictDto): Promise<District> {
        const district = new this.districtModel(createDistrictDto);
        return district.save();
    }

    async findAll(): Promise<District[]> {
        return this.districtModel.find({ isActive: true }).exec();
    }

    async findOne(id: string): Promise<District | null> {
        return this.districtModel.findById(id).exec();
    }

    async update(id: string, updateDistrictDto: UpdateDistrictDto): Promise<District | null> {
        return this.districtModel.findByIdAndUpdate(id, updateDistrictDto, { new: true }).exec();
    }

    async remove(id: string): Promise<{ message: string }> {
        const district = await this.districtModel.findByIdAndUpdate(id, { isActive: false }, { new: true }).exec();
        if (!district) {
            throw new Error('District not found');
        }
        return { message: 'District deleted successfully' };
    }
}