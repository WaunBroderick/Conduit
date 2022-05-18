import { forwardRef, Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema, Organization } from './organizations.schema';
import { UsersService } from 'src/services/users/users.service';
import { User, UserSchema } from 'src/services/users/users.schema';
import MongoIdScalar from 'src/common/scalars/mongo-id.scalar';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { DepartmentsService } from '../departments/departments.service';
import { DepartmentsModule } from '../departments/departments.module';
import {
  Department,
  DepartmentSchema,
} from '../departments/departments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Organization.name, schema: OrganizationSchema },
      { name: User.name, schema: UserSchema },
      { name: Department.name, schema: DepartmentSchema },
    ]),
    forwardRef(() => AuthModule),
    forwardRef(() => UsersModule),
    DepartmentsModule,
  ],
  providers: [
    OrganizationsResolver,
    OrganizationsService,
    MongoIdScalar,
    UsersService,
    DepartmentsService,
  ],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
