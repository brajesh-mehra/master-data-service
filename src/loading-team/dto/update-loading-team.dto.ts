import { PartialType } from '@nestjs/mapped-types';
import { CreateLoadingTeamDto } from './create-loading-team.dto';

export class UpdateLoadingTeamDto extends PartialType(CreateLoadingTeamDto) {}
