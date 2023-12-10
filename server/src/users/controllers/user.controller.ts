import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { UserService } from '../services/user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get('favorite')
  async getFavoriteList(@Req() req) {
    const userId = req.user.userId;
    return await this.userService.getFavoriteList(userId);
  }
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async whoAmI(@Req() request) {
    const userId = request.user.userId;
    return this.userService.findById(userId);
  }
  @Get(':id')
  async getUserData(@Param('id') id: string) {}
  @UseGuards(JwtAuthGuard)
  @Post('favorite')
  async updateFavoriteList(@Req() req, @Body() body) {
    const userId = req.user.userId;
    const productId = body.id;
    return await this.userService.addFavorite(userId, productId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update')
  async updateUserData(@Req() req, @Body() body) {
    const userId = req.user.userId;
    return await this.userService.updateUserData(body, userId);
  }
}
