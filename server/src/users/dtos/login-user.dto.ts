import { IsNotEmpty, IsString } from 'class-validator';

export class loginUserDto {
  @IsNotEmpty()
  @IsString()
  mail: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
