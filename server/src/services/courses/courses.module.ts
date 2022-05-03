import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { Course, CourseSchema } from './courses.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Assignment,
  AssignmentSchema,
} from '../assignments/assignments.schema';
import { AssignmentsService } from '../assignments/assignments.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: Assignment.name, schema: AssignmentSchema },
    ]),
  ],
  providers: [CoursesResolver, CoursesService, AssignmentsService],
})
export class CoursesModule {}
