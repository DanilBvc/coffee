import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsString()
  fullDescription: string;
  @IsArray()
  availableSizes: string[];
  @IsNumber()
  stars: number;
  @IsNumber()
  starsCount: number;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsString()
  @IsNotEmpty()
  picture: string;
}
