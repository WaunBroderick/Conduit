import { forwardRef, Module } from '@nestjs/common';
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
import MongoIdScalar from 'src/common/scalars/mongo-id.scalar';
import { AuthModule } from '../auth/auth.module';
import {
  Assignment,
  AssignmentSchema,
} from '../assignments/assignments.schema';
import { AssignmentsService } from '../assignments/assignments.service';
import { AssignmentsModule } from '../assignments/assignments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Organization.name, schema: OrganizationSchema },
      { name: Assignment.name, schema: AssignmentSchema },
    ]),
    forwardRef(() => OrganizationsModule),
    forwardRef(() => AssignmentsModule),
    forwardRef(() => AuthModule),
  ],
  providers: [
    UsersResolver,
    UsersService,
    MongoIdScalar,
    OrganizationsService,
    AssignmentsService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
