import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from '../schema/user.schema';
import { createUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async findUser(@Param('id') id: string) {
    try {
      const user = await this.userModel
        .findOne({ _id: id })
        .select('-passwordHash');
      return user;
    } catch (err) {
      throw new HttpException('something went wrong...', 500);
    }
  }

  async createUser(@Body() body: createUserDto) {
    try {
      const { mail, password, userName, avatar } = body;

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const user = new this.userModel({
        mail,
        passwordHash: hash,
        userName,
        avatar,
        _id: new mongoose.Types.ObjectId(),
        refreshToken: undefined,
        accessToken: undefined,
      });

      return user;
    } catch (Err) {
      console.log(Err);
      throw new HttpException('Registration failed', 500);
    }
  }

  //update
  async findByMail(mail: string) {
    try {
      const user = this.userModel.findOne({ mail });
      if (!user) {
        return undefined;
      }
      return user;
    } catch (err) {
      return undefined;
    }
  }
  async findById(id: string) {
    try {
      const user = await this.userModel.findOne({ _id: id });
      const userData = { ...user.toObject() };
      delete userData.passwordHash;
      return userData;
    } catch (err) {
      throw new HttpException('Failed to find user', 404);
    }
  }
  async addFavorite(userId: string, id: string) {
    const user = await this.findUser(userId);
    const updatedFavoriteList = user.favorite.includes(id as never)
      ? user.favorite.filter((product) => product !== id)
      : [...user.favorite, id];

    const updatedUser = await this.userModel.findOneAndUpdate(
      { _id: userId },
      { favorite: updatedFavoriteList },
      { new: true },
    );

    return updatedUser;
  }
  async findByIdObject(_id: string) {
    try {
      const user = await this.userModel.findOne({ _id });
      return user;
    } catch (err) {
      throw new HttpException('Failed to find user', 404);
    }
  }
}
