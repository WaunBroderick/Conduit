import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AssignmentsService } from './assignments.service';
import { Assignment } from './assignments.schema';
import { CreateAssignmentInput } from './dto/create-assignment.input';
import { UpdateAssignmentInput } from './dto/update-assignment.input';
import { Organization } from '../organizations/organizations.schema';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.schema';
import { OrganizationsService } from '../organizations/organizations.service';
import { Course } from '../courses/courses.schema';
import { CoursesService } from '../courses/courses.service';

@Resolver(() => Assignment)
export class AssignmentsResolver {
  constructor(
    private readonly assignmentsService: AssignmentsService,
    private usersService: UsersService,
    private organizationService: OrganizationsService,
    private courseService: CoursesService,
  ) {}

  @Mutation(() => Assignment)
  async createAssignment(@Args('input') assignment: CreateAssignmentInput) {
    return this.assignmentsService.createAssignment(assignment);
  }

  @Query(() => [Assignment], { name: 'assignments' })
  async findAll() {
    return this.assignmentsService.findAll();
  }

  @Query(() => Assignment, { name: 'assignment' })
  async findById(@Args('id', { type: () => String }) id: string) {
    return this.assignmentsService.findById(id);
  }

  @Query(() => [Assignment], { name: 'assignmentByUserId' })
  async findByUserId(@Args('id', { type: () => String }) id: string) {
    return this.assignmentsService.findByUserId(id);
  }
  @Mutation(() => Assignment)
  async removeAssignment(@Args('id', { type: () => Int }) id: number) {
    return this.assignmentsService.remove(id);
  }

  @ResolveField(() => Organization)
  async organization(@Parent() parent: Assignment) {
    return this.organizationService.findById(parent.organization);
  }

  @ResolveField(() => Course)
  async course(@Parent() parent: Assignment) {
    return this.courseService.findById(parent.course);
  }

  @ResolveField(() => User)
  async user(@Parent() parent: Assignment) {
    return this.usersService.findById(parent.user);
  }
}
