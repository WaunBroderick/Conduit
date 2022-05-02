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

@Resolver(() => Assignment)
export class AssignmentsResolver {
  constructor(
    private readonly assignmentsService: AssignmentsService,
    private usersService: UsersService,
    private organizationService: OrganizationsService,
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
  async findById(@Args('id', { type: () => Int }) id: string) {
    return this.assignmentsService.findById(id);
  }

  @Mutation(() => Assignment)
  async removeAssignment(@Args('id', { type: () => Int }) id: number) {
    return this.assignmentsService.remove(id);
  }

  @ResolveField(() => Organization)
  async organization(@Parent() parent: Assignment) {
    return this.organizationService.findById(parent.organization);
  }

  @ResolveField(() => [User])
  async user(@Parent() parent: Assignment) {
    return this.usersService.findByUserId(parent.user);
  }

  //@ResolveField()
  //async users(@Parent() parent: Organization) {
  //  return this.usersService.findByAssignmentId(parent.id);
  //}
}
