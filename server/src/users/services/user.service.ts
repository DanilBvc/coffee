import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from '../schema/user.schema';
import { createUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { updateUserDto } from '../dtos/update-user.dto';
import { ProductService } from 'src/products/services/product.service';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly productService: ProductService,
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
  async getFavoriteList(userId: string) {
    const user = await this.findById(userId);
    const favoriteList = user.favorite;
    const promiseArr = favoriteList.map((item) =>
      this.productService.findProductById(item),
    );
    return await Promise.allSettled(promiseArr);
  }
  async findByIdObject(_id: string) {
    try {
      const user = await this.userModel.findOne({ _id });
      return user;
    } catch (err) {
      throw new HttpException('Failed to find user', 404);
    }
  }
  async updateUserData(@Body() body: updateUserDto, userId: string) {
    try {
      const { userName, mail } = body;
      const user = await this.findByIdObject(userId);
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      user.userName = userName;
      user.mail = mail;
      const updUser = await user.save();
      const userData = { ...updUser.toObject() };
      delete userData.passwordHash;
      return updUser;
    } catch (err) {
      throw new HttpException('Failed to update user data', 400);
    }
  }
}
