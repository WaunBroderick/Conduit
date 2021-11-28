import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.model'
import { Model } from 'mongoose';

var bcrypt = require('bcryptjs');


// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(
    @InjectModel('User') private readonly UserModel: Model<User>
    ) {}

  async findAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }

  async findOne(email: string): Promise<User> {
    return await this.UserModel.findById(email).exec();
  }

  async createUser(name: string, email: string, organization: string, password: string){
    
    const newUser = new this.UserModel({
      name: name, 
      email: email, 
      organization: organization, 
      password: password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        newUser.password = hash;
        const result = newUser.save();

      })
    })
    return;
  }


}