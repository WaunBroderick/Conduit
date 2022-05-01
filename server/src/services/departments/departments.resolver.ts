import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from './departments.schema';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { User } from '../users/users.schema';
import { UsersService } from '../users/users.service';
import { OrganizationsService } from '../organizations/organizations.service';
import { Organization } from '../organizations/organizations.schema';

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(
    private readonly departmentsService: DepartmentsService,
    private usersService: UsersService,
    private organizationService: OrganizationsService,
  ) {}

  @Mutation(() => Department)
  async createDepartment(@Args('input') department: CreateDepartmentInput) {
    return this.departmentsService.create(department);
  }

  @Query(() => [Department], { name: 'departments' })
  findAll() {
    return this.departmentsService.findAll();
  }

  @Query(() => Department, { name: 'department' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.findOne(id);
  }

  @Mutation(() => Department)
  updateDepartment(
    @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput,
  ) {
    return this.departmentsService.update(
      updateDepartmentInput.id,
      updateDepartmentInput,
    );
  }

  @Mutation(() => Department)
  removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.remove(id);
  }

  @ResolveField(() => [User])
  async admins(@Parent() department: Department) {
    return this.usersService.findByUserId(department.admins);
  }

  @ResolveField(() => Organization)
  async organization(@Parent() department: Department) {
    return this.organizationService.findById(department.organization);
  }
}
