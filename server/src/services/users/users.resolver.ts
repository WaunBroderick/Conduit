import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Organization } from '../organizations/organizations.schema';
import { OrganizationsService } from '../organizations/organizations.service';
import { LoginUserInput } from './dto/login-user.input';
import { LoggedUserOutput } from './dto/logged-user.output';
import { AssignmentsService } from '../assignments/assignments.service';
import { Assignment } from '../assignments/assignments.schema';
import { CoursesService } from '../courses/courses.service';
import { Course } from '../courses/courses.schema';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private organizationService: OrganizationsService,
    private assignmentService: AssignmentsService,
    private courseService: CoursesService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('input') user: CreateUserInput) {
    return this.usersService.create(user);
  }

  @Mutation(() => LoggedUserOutput)
  async loginUser(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.usersService.loginUser(loginUserInput);
  }
  @Query(() => [User], { name: 'users' })
  async findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @ResolveField(() => Organization)
  async organization(@Parent() user: User) {
    return this.organizationService.findById(user.organization);
  }

  @ResolveField(() => User)
  async users(@Parent() parent: Organization) {
    return this.usersService.findByOrganizationId(parent._id);
  }

  @ResolveField(() => Assignment)
  async assignments(@Parent() parent: Assignment) {
    return this.assignmentService.findByUserId(parent._id);
  }
}
