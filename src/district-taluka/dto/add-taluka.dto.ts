import { IsString, IsNotEmpty, IsDefined } from 'class-validator';

export class AddTalukaDto {
    @IsDefined({ message: 'Taluka name is required' })
    @IsNotEmpty({ message: 'Taluka name cannot be empty' })
    @IsString({ message: 'Taluka name must be a valid string' })
    talukaName: string;

    @IsDefined({ message: 'Taluka code is required' })
    @IsNotEmpty({ message: 'Taluka code cannot be empty' })
    @IsString({ message: 'Taluka code must be a valid string' })
    talukaCode: string;
}