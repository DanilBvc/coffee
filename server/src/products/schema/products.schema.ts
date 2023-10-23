import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
import * as mongooseTimestamp from 'mongoose-timestamp';
export type userDocument = HydratedDocument<Product>;

@Schema({
  _id: true,
})
export class Product extends Document {
  @Prop({ type: String, required: true })
  title: string;
  @Prop({ type: String, required: true })
  description: string;
  @Prop({ type: String })
  fullDescription: string;
  @Prop({ type: [String] })
  availableSizes: string[];
  @Prop({ type: Number })
  stars: number;
  @Prop({ type: Number })
  starsCount: number;
  @Prop({ type: Number })
  price: string;
  @Prop({ type: String })
  picture: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.plugin(mongooseTimestamp);
