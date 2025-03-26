import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { District } from '../schemas/district-taluka.schema';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictTalukaService {
  constructor(@InjectModel(District.name) private districtModel: Model<District>) {}

  async createDistrict(createDistrictDto: CreateDistrictDto): Promise<District> {
    const district = new this.districtModel(createDistrictDto);
    return district.save();
  }


  async getAllDistricts(): Promise<District[]> {
    return this.districtModel.find({ isActive: true }).exec();
  }

  async getDistrictById(districtId: string): Promise<District> {
    const district = await this.districtModel.findById(districtId).exec();
    if (!district) {
      throw new NotFoundException('District not found');
    }
    return district;
  }

  async updateDistrict(districtId: string, updateDistrictDto: UpdateDistrictDto): Promise<District | null> {
    return this.districtModel.findByIdAndUpdate(districtId, updateDistrictDto, { new: true }).exec();
  }

  async deleteDistrict(districtId: string): Promise<{ message: string }> {
    const district = await this.districtModel.findByIdAndUpdate(districtId, { isActive: false,  isDeleted: true }, { new: true }).exec();
    if (!district) {
      throw new NotFoundException('District not found');
    }
    return { message: 'District deleted successfully' };
  }
}