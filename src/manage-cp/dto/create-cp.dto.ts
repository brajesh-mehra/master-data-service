import { IsString, IsOptional, IsNotEmpty, IsDefined } from 'class-validator';

export class CreateCPDto {
    @IsDefined({ message: 'Name is required' })
    @IsNotEmpty({ message: 'Name cannot be empty' })
    @IsString({ message: 'Name must be a valid string' })
    name: string;

    @IsOptional()
    isActive?: boolean;
}
