import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import {
  Organization,
  OrganizationDocument,
} from '../organizations/organizations.schema';

@Injectable()
export class UsersService {
  users: Partial<User>[];
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  async create(user: CreateUserInput) {
    return this.userModel.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findByOrganizationId(organizationId) {
    return this.userModel.find({ organization: organizationId });
  }

  async findByUserId(userId) {
    return this.userModel.find({ id: userId });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
