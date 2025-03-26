import { IsOptional, IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class TalukaDto {
  @IsString({ message: 'Taluka name must be a valid string' })
  name: string;
}

export class UpdateDistrictDto {
  @IsOptional()
  @IsString({ message: 'District name must be a valid string' })
  name?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TalukaDto)
  talukas?: TalukaDto[];
}