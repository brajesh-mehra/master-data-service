import { IsString, IsNotEmpty, IsArray, ValidateNested, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { AddTalukaDto } from './add-taluka.dto';

export class CreateDistrictDto {
    @IsDefined({ message: 'District name is required' })
    @IsNotEmpty({ message: 'District name cannot be empty' })
    @IsString({ message: 'District name must be a valid string' })
    districtName: string;

    @IsDefined({ message: 'District code is required' })
    @IsNotEmpty({ message: 'District code cannot be empty' })
    @IsString({ message: 'District code must be a valid string' })
    districtCode: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddTalukaDto)
    talukas: AddTalukaDto[];
}