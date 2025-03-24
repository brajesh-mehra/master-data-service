import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ManageCP } from '../schemas/manage-cp.schema';
import { CreateCPDto } from './dto/create-cp.dto';

@Injectable()
export class ManageCpService {
    constructor(@InjectModel(ManageCP.name) private cpModel: Model<ManageCP>) { }

    async create(createCPDto: CreateCPDto): Promise<ManageCP> {
        const user = new this.cpModel(createCPDto);
        return user.save();
    }

    async findAll(): Promise<ManageCP[]> {
        return this.cpModel.find({ isActive: true }).exec();
    }
}
