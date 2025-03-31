import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoadingTeam, LoadingTeamDocument } from '../schemas/loading-team.schema';
import { CreateLoadingTeamDto } from './dto/create-loading-team.dto';
import { UpdateLoadingTeamDto } from './dto/update-loading-team.dto';

@Injectable()
export class LoadingTeamService {
    constructor(
        @InjectModel(LoadingTeam.name) private readonly loadingTeamModel: Model<LoadingTeamDocument>,
    ) { }

    async createLoadingTeam(createLoadingTeamDto: CreateLoadingTeamDto): Promise<LoadingTeam> {
        const loadingTeam = new this.loadingTeamModel(createLoadingTeamDto);
        return loadingTeam.save();
    }

    async getAllLoadingTeams(): Promise<LoadingTeam[]> {
        return this.loadingTeamModel.find({ isActive: true }).exec();
    }

    async getLoadingTeamById(id: string): Promise<LoadingTeam> {
        const loadingTeam = await this.loadingTeamModel.findById(id).exec();
        if (!loadingTeam) {
            throw new NotFoundException('Loading Team not found');
        }
        return loadingTeam;
    }

    async updateLoadingTeam(id: string, updateLoadingTeamDto: UpdateLoadingTeamDto): Promise<LoadingTeam | null> {
        if (!updateLoadingTeamDto) {
            throw new BadRequestException('Update data is required');
        }
        return this.loadingTeamModel.findByIdAndUpdate(id, updateLoadingTeamDto, { new: true }).exec();
    }

    async deleteLoadingTeam(id: string): Promise<{ message: string }> {
        const loadingTeam = await this.loadingTeamModel.findByIdAndUpdate(id, { isActive: false, isDeleted: true }, { new: true }).exec();
        if (!loadingTeam) {
            throw new NotFoundException('Loading Team not found');
        }
        return { message: 'Loading Team deleted successfully' };
    }
}