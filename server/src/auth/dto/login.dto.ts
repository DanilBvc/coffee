import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  mail: string;
  @IsNotEmpty()
  password: string;
}
