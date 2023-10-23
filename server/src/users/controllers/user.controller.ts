import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { UserService } from '../services/user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async whoAmI(@Req() request) {
    const userId = request.user.userId;
    return this.userService.findById(userId);
  }
  @Get(':id')
  async getUserData(@Param('id') id: string) {
    console.log(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post('favorite')
  async updateFavoriteList(@Req() req, @Body() body) {
    console.log('req');
    const userId = req.user.userId;
    const productId = body.id;
    return await this.userService.addFavorite(userId, productId);
  }
  // @UseGuards(JwtAuthGuard)
  // @Get('orders')
  // async getUserOrders(@Req() request) {}
}
