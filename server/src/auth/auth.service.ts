import { UserService } from './../users/services/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import RefreshToken from './entities/refresh.token.entity';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/schema/user.schema';
import { sign, verify } from 'jsonwebtoken';
import { Token } from './schema/token.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Token.name) private readonly refreshTokens: Model<Token>,
    private readonly userService: UserService,
  ) {}

  async refresh(refreshStr: string): Promise<string | undefined> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return undefined;
    }
    const user = this.userService.findById(refreshToken.userId);
    if (!user) {
      return undefined;
    }
    const accessToken = {
      userId: refreshToken.userId,
    };
    return sign(accessToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  }

  private async retrieveRefreshToken(
    refreshStr: string,
  ): Promise<Token | undefined> {
    try {
      const decode = verify(refreshStr, process.env.REFRESH_SECRET);
      if (typeof decode === 'string') {
        return undefined;
      }
      const token = await this.refreshTokens.findOne({ id: decode.id });
      return Promise.resolve(token);
    } catch (err) {
      return undefined;
    }
  }

  async login(
    mail: string,
    password: string,
    values: { userAgent: string; ipAddress: string },
  ) {
    const user = await this.userService.findByMail(mail);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const isValidPassword = await bcrypt.compare(
      password,
      user.toObject().passwordHash,
    );

    if (!isValidPassword) {
      return undefined;
    }
    const tokens = await this.newRefreshAndAccessToken(user, values);
    user.accessToken = tokens.accessToken;
    user.refreshToken = tokens.refreshToken;
    await user.save();
    const userData = { ...user.toObject() };
    delete userData.passwordHash;
    return userData;
  }

  private async generateNextTokenId(): Promise<number> {
    const lastToken = await this.refreshTokens
      .findOne()
      .sort({ id: -1 })
      .select('id')
      .exec();

    return (lastToken ? lastToken.id : 0) + 1;
  }

  private async newRefreshAndAccessToken(
    user: User,
    values: { userAgent: string; ipAddress: string },
  ): Promise<{ accessToken: string; refreshToken: string }> {
    // const modelLength = (await this.refreshTokens.find({})).length;
    const nextTokenId = await this.generateNextTokenId();
    const refreshObject = new RefreshToken({
      id: String(nextTokenId),
      ...values,
      userId: user._id,
    });
    const newRefresh = new this.refreshTokens(refreshObject);
    await newRefresh.save();
    return {
      refreshToken: refreshObject.sign(),
      accessToken: sign(
        {
          userId: user._id,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: '1h',
        },
      ),
    };
  }
  async register(
    body: {
      mail: string;
      password: string;
      userName: string;
      avatar: string;
    },
    values: { userAgent: string; ipAddress: string },
  ) {
    const { mail } = body;
    const userWithSameMail = await this.userService.findByMail(mail);
    if (userWithSameMail) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }
    const user = await this.userService.createUser(body);
    const userData = { ...user.toObject() };
    delete userData.passwordHash;
    const tokens = await this.newRefreshAndAccessToken(user, values);
    user.refreshToken = tokens.refreshToken;
    user.accessToken = tokens.accessToken;
    await user.save();

    return {
      userData,
      tokens,
    };
  }
  async logout(refreshStr) {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return undefined;
    }
    try {
      await this.refreshTokens.findOneAndDelete({ id: refreshToken.id });
    } catch (err) {
      throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
    }

    return null;
  }
}
