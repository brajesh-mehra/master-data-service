import { IsString, IsBoolean, IsOptional, IsDefined, IsNotEmpty } from 'class-validator';

export class CreateLoadingTeamDto {
  @IsDefined({ message: 'Name is required' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Name must be a valid string' })
  name: string;

  @IsDefined({ message: 'Mobile number is required' })
  @IsNotEmpty({ message: 'Mobile number cannot be empty' })
  @IsString({ message: 'Mobile number must be a valid string' })
  mobileNo: string;

  @IsOptional()
  @IsBoolean({ message: 'isActive must be a boolean value' })
  isActive?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'isDeleted must be a boolean value' })
  isDeleted?: boolean;
}