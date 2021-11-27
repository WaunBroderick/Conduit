import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.model'
import { Model } from 'mongoose';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async createUser(name: string, organization: string, email: string, password: string){
    const newUser = new this.UserModel({
      name: name, 
      organization: organization, 
      email: email, 
      password: password
    });
    const result = await newUser.save();
    console.log(result);
    return 'heres a string';
  }


  async findOne(name: string): Promise<User | undefined> {
    return this.users.find(user => user.name === name);
  }
}