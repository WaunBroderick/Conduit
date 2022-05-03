import { forwardRef, Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsResolver } from './assignments.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Assignment, AssignmentSchema } from './assignments.schema';
import { User, UserSchema } from '../users/users.schema';
import { UsersService } from '../users/users.service';
import {
  Organization,
  OrganizationSchema,
} from '../organizations/organizations.schema';
import { AuthModule } from '../auth/auth.module';
import { OrganizationsService } from '../organizations/organizations.service';
import { Course, CourseSchema } from '../courses/courses.schema';
import { CoursesService } from '../courses/courses.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assignment.name, schema: AssignmentSchema },
      { name: User.name, schema: UserSchema },
      { name: Organization.name, schema: OrganizationSchema },
      { name: Course.name, schema: CourseSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    AssignmentsResolver,
    AssignmentsService,
    UsersService,
    OrganizationsService,
    CoursesService,
  ],
  exports: [AssignmentsService],
})
export class AssignmentsModule {}
