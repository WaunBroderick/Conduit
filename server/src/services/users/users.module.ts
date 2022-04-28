import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema } from './users.schema';

import { User } from './users.schema';
import {
  Organization,
  OrganizationSchema,
} from 'src/services/organizations/organizations.schema';
import { OrganizationsService } from 'src/services/organizations/organizations.service';
import { OrganizationsModule } from '../organizations/organizations.module';
import MongoIdScalar from 'common/scalars/mongo-id.scalar';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Organization.name, schema: OrganizationSchema },
    ]),
    OrganizationsModule,
  ],
  providers: [UsersResolver, UsersService, MongoIdScalar, OrganizationsService],
  exports: [UsersService],
})
export class UsersModule {}
