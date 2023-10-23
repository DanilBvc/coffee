import { IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  mail: string;
  @IsString()
  avatar: string;
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  userName: string;
}
