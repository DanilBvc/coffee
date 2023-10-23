import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
import * as mongooseTimestamp from 'mongoose-timestamp';
import { Product } from 'src/products/schema/products.schema';
import { User } from 'src/users/schema/user.schema';
export type orderDocument = HydratedDocument<Order>;

@Schema({
  _id: true,
})
export class Order extends Document {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  customer: User;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Product' })
  productData: Product;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.plugin(mongooseTimestamp);
