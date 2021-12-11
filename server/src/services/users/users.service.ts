import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.model';
import { Model } from 'mongoose';

import { IUser } from './interfaces/user.interface';
import { AssignUserDepartmentDto } from './dto/assign-user-department';

var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async updateUserDepartments(
    userId: string,
    assignUserDepartmentDto: AssignUserDepartmentDto,
  ): Promise<IUser> {
    const existingUser = await this.userModel.findByIdAndUpdate(
      { _id: userId },
      assignUserDepartmentDto,
    );

    if (!existingUser) {
      throw new NotFoundException(`Organization #${userId} not found`);
    }
    return existingUser;
  }
}
