import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { Order, OrderSchema } from './schema/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/users/services/user.service';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ProductsModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, UserService, JwtService],
})
export class OrderModule {}
