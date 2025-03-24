import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DistrictTalukaService } from './district-taluka.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Controller()
export class DistrictTalukaController {
    constructor(private readonly districtTalukaService: DistrictTalukaService) { }

    @MessagePattern('getDistrictList')
    async getDistrictList() {
        return this.districtTalukaService.findAll();
    }

    @MessagePattern('createDistrict')
    async createDistrict(@Payload() createDistrictDto: CreateDistrictDto) {
        return this.districtTalukaService.create(createDistrictDto);
    }

    @MessagePattern('updateDistrict')
    async updateDistrict(@Payload() { id, ...updateDistrictDto }: { id: string } & UpdateDistrictDto) {
        return this.districtTalukaService.update(id, updateDistrictDto);
    }

    @MessagePattern('deleteDistrict')
    async deleteDistrict(@Payload() { id }: { id: string }) {
        return this.districtTalukaService.remove(id);
    }

    @MessagePattern('getDistrictById')
    async getDistrictById(@Payload() { id }: { id: string }) {
        return this.districtTalukaService.findOne(id);
    }
}