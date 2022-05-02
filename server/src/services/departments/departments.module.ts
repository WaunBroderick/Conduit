import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Organization,
  OrganizationSchema,
} from '../organizations/organizations.schema';
import { User, UserSchema } from '../users/users.schema';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { Department, DepartmentSchema } from './departments.schema';
import { UsersService } from '../users/users.service';
import { OrganizationsService } from '../organizations/organizations.service';
import MongoIdScalar from 'src/common/scalars/mongo-id.scalar';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
      { name: Organization.name, schema: OrganizationSchema },
      { name: User.name, schema: UserSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    DepartmentsResolver,
    DepartmentsService,
    UsersService,
    OrganizationsService,
    MongoIdScalar,
  ],
})
export class DepartmentsModule {}
