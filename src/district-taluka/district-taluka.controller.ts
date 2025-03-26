import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DistrictTalukaService } from './district-taluka.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

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
  getDistrictById(@Payload() { districtId }: { districtId: string }) {
    return this.districtTalukaService.getDistrictById(districtId);
  }

  @MessagePattern('updateDistrict')
  updateDistrict(@Payload() { districtId, updateDistrictDto }: { districtId: string; updateDistrictDto: UpdateDistrictDto }) {
    return this.districtTalukaService.updateDistrict(districtId, updateDistrictDto);
  }

  @MessagePattern('deleteDistrict')
  deleteDistrict(@Payload() { districtId }: { districtId: string }) {
    return this.districtTalukaService.deleteDistrict(districtId);
  }
}