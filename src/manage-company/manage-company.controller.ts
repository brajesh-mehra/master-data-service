import { Controller, Get, Post, Body } from '@nestjs/common';
import { ManageCompanyService } from './manage-company.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('manage-company')
export class ManageCompanyController {
    constructor(private readonly companyService: ManageCompanyService) { }

    @MessagePattern('getAllCompanyList')
    async getAllCompanyList() {
        return this.companyService.findAll();
    }


    @MessagePattern('createCompany')
    async createCompany(@Payload() createCompanyDto: CreateCompanyDto) {
        return this.companyService.create(createCompanyDto);
    }

}
