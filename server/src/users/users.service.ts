import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.model';
import { Model } from 'mongoose';

var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }

  async findOne(email: string): Promise<User> {
    return await this.UserModel.findById(email).exec();
  }

  async createUser(
    name: string,
    email: string,
    organization: string,
    password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.UserModel({
      name: name,
      email: email,
      organization: organization,
      password: hashedPassword,
    });

    try {
      await newUser.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }

    return;
  }
}
