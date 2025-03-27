import { BadRequestException, Controller, NotFoundException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DistrictTalukaService } from './district-taluka.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { isValidObjectId } from 'mongoose';

@Controller()
export class DistrictTalukaController {
  constructor(private readonly districtTalukaService: DistrictTalukaService) {}

  @MessagePattern('createDistrict')
  createDistrict(@Payload() createDistrictDto: CreateDistrictDto) {
    return this.districtTalukaService.createDistrict(createDistrictDto);
  }

  @MessagePattern('getAllDistricts')
  getAllDistricts() {
    return this.districtTalukaService.getAllDistricts();
  }

  @MessagePattern('getDistrictById')
  async getDistrictById(@Payload() { districtId }: { districtId: string }) {
    if (!isValidObjectId(districtId)) {
      throw new BadRequestException(`No district found with the given ID`);
    }

    const district = await this.districtTalukaService.getDistrictById(districtId);
    if (!district) {
      throw new NotFoundException(`No district found with the given ID`);
    }

    return district;
  }

  @MessagePattern('updateDistrict')
  async updateDistrict(@Payload() { districtId, ...updateDistrictDto }: { districtId: string } & UpdateDistrictDto) {
    if (!isValidObjectId(districtId)) {
      throw new BadRequestException(`No district found with the given ID`);
    }

    const updatedDistrict = await this.districtTalukaService.updateDistrict(districtId, updateDistrictDto);

    if (!updatedDistrict) {
      throw new NotFoundException('District not found.');
    }

    return updatedDistrict;
  }

  @MessagePattern('deleteDistrict')
  async deleteDistrict(@Payload() { districtId }: { districtId: string }) {
    if (!isValidObjectId(districtId)) {
      throw new BadRequestException('Invalid district ID format.');
    }
    return await this.districtTalukaService.deleteDistrict(districtId);
  }
}