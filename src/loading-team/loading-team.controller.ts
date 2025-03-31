import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { LoadingTeamService } from './loading-team.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateLoadingTeamDto } from './dto/create-loading-team.dto';
import { UpdateLoadingTeamDto } from './dto/update-loading-team.dto';
import { isValidObjectId } from 'mongoose';

@Controller('loading-team')
export class LoadingTeamController {
    constructor(private readonly loadingTeamService: LoadingTeamService) { }

    @MessagePattern('createLoadingTeam')
    async createLoadingTeam(@Payload() data: CreateLoadingTeamDto) {
        return this.loadingTeamService.createLoadingTeam(data);
    }

    @MessagePattern('getAllLoadingTeams')
    async getAllLoadingTeams() {
        return this.loadingTeamService.getAllLoadingTeams();
    }

    @MessagePattern('getLoadingTeamById')
    async getLoadingTeamById(@Payload() { id }: { id: string }) {
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`No loading team found with the given ID`);
        }

        const loadingTeam = await this.loadingTeamService.getLoadingTeamById(id);
        if (!loadingTeam) {
            throw new NotFoundException(`No loading team found with the given ID`);
        }

        return loadingTeam;
    }


    @MessagePattern('updateLoadingTeam')
    async updateLoadingTeam(@Payload() { id, ...updateLoadingTeamDto }: { id: string } & UpdateLoadingTeamDto) {
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`No loading team found with the given ID`);
        }

        const updatedLoadingTeam = await this.loadingTeamService.updateLoadingTeam(id, updateLoadingTeamDto);

        if (!updatedLoadingTeam) {
            throw new NotFoundException('Loading team not found.');
        }

        return updatedLoadingTeam;
    }

    @MessagePattern('deleteLoadingTeam')
    async deleteLoadingTeam(@Payload() { id }: { id: string }) {
        if (!isValidObjectId(id)) {
            throw new BadRequestException('Invalid laoding team ID format.');
        }
        return await this.loadingTeamService.deleteLoadingTeam(id);
    }
}