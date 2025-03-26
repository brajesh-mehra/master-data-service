import { IsDefined, IsNotEmpty, IsString, IsBoolean, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class TalukaDto {
    @IsDefined({ message: 'Taluka name is required' })
    @IsNotEmpty({ message: 'Taluka name cannot be empty' })
    @IsString({ message: 'Taluka name must be a valid string' })
    name: string;
}

export class CreateDistrictDto {
    @IsDefined({ message: 'District name is required' })
    @IsNotEmpty({ message: 'District name cannot be empty' })
    @IsString({ message: 'District name must be a valid string' })
    name: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TalukaDto)
    talukas: TalukaDto[];
}