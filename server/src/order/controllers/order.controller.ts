import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { updateOrderDto } from '../dto/updateOrder.dto';
import { createOrderDto } from '../dto/order.dto';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get(':id')
  async findOrder(@Param() id: string) {
    return await this.findOrder(id);
  }
  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createOrder(@Req() req, @Body() body: createOrderDto) {
    const customerId = req.user.userId;
    return await this.orderService.createOrder(body, customerId);
  }
  @Post('update')
  @UseGuards(JwtAuthGuard)
  async updateOrder(@Req() req, @Body() body: updateOrderDto) {
    const userId = req.user.userId;
    return await this.orderService.updateOrder(body, userId);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteOrder(@Req() req, @Param() id: string) {
    const userId = req.user.userId;
    return await this.orderService.deleteOrder(id, userId);
  }
}
