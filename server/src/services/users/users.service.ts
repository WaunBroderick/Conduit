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
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async findAll(paginationQuery: PaginationQueryDto): Promise<User[]> {
    // const { limit, offset } = paginationQuery;
    const limit = 20;
    const offset = 20;

    return await this.userModel.find().skip(offset).limit(limit).exec();
  }

  public async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById({ _id: id }).exec();

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  public async findByOrg(orgId: string): Promise<IUser[]> {
    const query = { organization: mongoose.Types.ObjectId(orgId) };

    if (!query) {
      throw new NotFoundException(
        `No users belonging to organization #${orgId} were found`,
      );
    }
    return await this.userModel
      .find(query)
      .select('name')
      .select('email')
      .select('organization')
      .exec();
  }

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
