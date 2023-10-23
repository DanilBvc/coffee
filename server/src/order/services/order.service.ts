import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../schema/order.schema';
import { Model } from 'mongoose';
import { createOrderDto } from '../dto/order.dto';
import { updateOrderDto } from '../dto/updateOrder.dto';
import { UserService } from 'src/users/services/user.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    private readonly userService: UserService,
  ) {}
  async createOrder(@Body() body: createOrderDto, customerId: string) {
    try {
      const { ...productData } = body;
      const order = new this.orderModel({
        productData,
        customer: customerId,
      });
      const createdOrder = await order.save();
      const user = await this.userService.findByIdObject(customerId);
      user.orders = [...user.orders, createdOrder._id];
      user.save();
      return createdOrder;
    } catch (err) {
      throw new HttpException('Failed to create order', 500);
    }
  }
  async updateOrder(@Body() body: updateOrderDto, userId: string) {
    try {
      const { orderId, productData } = body;
      const order = await this.orderModel.findById(orderId);

      if (!order) {
        throw new HttpException('Order not found', 404);
      }

      if (userId !== order.customer._id.toString()) {
        throw new HttpException(
          'You do not have permission to update this order',
          403,
        );
      }

      order.set({ ...order, productData });
      const updatedOrder = await order.save();

      if (!updatedOrder) {
        throw new HttpException('Failed to update order', 500);
      }

      return updatedOrder;
    } catch (err) {
      throw new HttpException('Failed to update order', 500);
    }
  }
  async findOrder(@Param('orderId') orderId: string) {
    try {
      return await this.orderModel.findById(orderId);
    } catch (err) {
      throw new HttpException('Order not found', 404);
    }
  }
  async deleteOrder(@Body() orderId: string, userId: string) {
    try {
      const order = await this.orderModel.findById(orderId);
      if (!order) {
        throw new HttpException('Order not found', 404);
      }
      if (order.customer._id.toString() !== userId) {
        throw new HttpException(
          'You do not have permission to delete this order',
          403,
        );
      }
      const deletionResult = await this.orderModel.deleteOne({ _id: orderId });

      if (deletionResult.deletedCount !== 1) {
        throw new HttpException('Failed to delete order', 500);
      }
    } catch (err) {
      throw new HttpException('Failed to delete order', 500);
    }
  }
}
