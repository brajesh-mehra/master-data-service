import { Controller, Get, Post, Body } from '@nestjs/common';
import { ManageCpService } from './manage-cp.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCPDto } from './dto/create-cp.dto';

@Controller('manage-cp')
export class ManageCpController {
    constructor(private readonly cpService: ManageCpService) { }

    @MessagePattern('getCPList')
    async getCPList() {
        return this.cpService.findAll();
    }


    @MessagePattern('createCP')
    async createCP(@Payload() createCPDto: CreateCPDto) {
        return this.cpService.create(createCPDto);
    }

}
