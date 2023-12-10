import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
export type tokenDocument = HydratedDocument<Token>;

@Schema()
export class Token extends Document {
  @Prop({ type: String })
  id: string;
  @Prop({ type: String })
  userId: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
