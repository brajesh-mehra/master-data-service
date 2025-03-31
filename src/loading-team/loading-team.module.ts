import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoadingTeamService } from './loading-team.service';
import { LoadingTeamController } from './loading-team.controller';
import { LoadingTeam, LoadingTeamSchema } from '../schemas/loading-team.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LoadingTeam.name, schema: LoadingTeamSchema }])],
  controllers: [LoadingTeamController],
  providers: [LoadingTeamService],
  exports: [LoadingTeamService],
})
export class LoadingTeamModule {}