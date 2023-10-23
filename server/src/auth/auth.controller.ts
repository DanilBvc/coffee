import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Delete,
  Ip,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { refreshTokenDto } from './dto/refresh-token.dto';
import { registerUserDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    const { mail, password } = body;
    const userData = await this.authService.login(mail, password, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    });
    if (!userData) {
      throw new UnauthorizedException('Incorrect mail or password');
    }
    return userData;
  }
  @Post('refresh')
  async refreshToken(@Body() body: refreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }
  @Post('register')
  async register(
    @Req() request,
    @Ip() ip: string,
    @Body() body: registerUserDto,
  ) {
    const { mail, password, avatar, userName } = body;
    const user = await this.authService.register(
      {
        userName,
        avatar,
        password,
        mail,
      },
      {
        ipAddress: ip,
        userAgent: request.headers['user-agent'],
      },
    );
    return user;
  }
  @Delete('logout')
  async logout(@Body() body: refreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}
