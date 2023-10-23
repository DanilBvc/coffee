import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
export type userDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({ type: String })
  userName: string;
  @Prop({ type: String, required: true })
  passwordHash: string;
  @Prop({ type: String, required: true, unique: true })
  mail: string;
  @Prop({ type: [String] || [], default: [] })
  favorite: string[] | [];
  @Prop({ type: [String] })
  orders: string[];
  @Prop({ type: String })
  avatar: string;
  @Prop({ type: String })
  _id: string;
  @Prop({ type: String || undefined })
  accessToken: string | undefined;
  @Prop({ type: String || undefined })
  refreshToken: string | undefined;
}

export const UserSchema = SchemaFactory.createForClass(User);
