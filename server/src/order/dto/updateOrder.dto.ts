import { IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';
import { Product } from 'src/products/schema/products.schema';

export class updateOrderDto {
  readonly productData: Product;
  @IsNotEmpty()
  orderId: mongoose.Types.ObjectId;
}
