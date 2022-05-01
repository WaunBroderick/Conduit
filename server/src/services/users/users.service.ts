import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { LoginUserInput } from './dto/login-user.input';
import { AuthService } from '../auth/auth.service';
import {
  Organization,
  OrganizationDocument,
} from '../organizations/organizations.schema';
import { identity } from 'rxjs';

var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  users: Partial<User>[];
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private authService: AuthService,
  ) {}
  async create(user: CreateUserInput) {
    const saltOrRounds = 10;
    const password = user.password;
    user.password = await bcrypt.hash(password, saltOrRounds);
    return this.userModel.create(user);
  }

  async loginUser(loginUserInput: LoginUserInput) {
    const user = await this.authService.validateUser(
      loginUserInput.email,
      loginUserInput.password,
    );
    if (!user) {
      throw new BadRequestException(`Email or password are invalid`);
    } else {
      return this.authService.generateUserCredentials(user);
    }
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

  async findByEMail(userEmail) {
    return this.userModel.find({ email: userEmail });
  }

  async findOneByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email }).exec();
    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    return user;
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }
}
