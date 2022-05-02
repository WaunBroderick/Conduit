import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { User, UserSchema } from 'src/services/users/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../../common/helpers/mongoose.helper';

describe('Logger', () => {
  test.todo('Some test to be written in the future');
});
