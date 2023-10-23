import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './services/user.service';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [AuthService, JwtService, UserService],
  exports: [UserService],
})
export class UserModule {}
