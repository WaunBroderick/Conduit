import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { OrganizationsService } from './organizations.service';
import { Organization } from './organizations.schema';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.schema';

@Resolver(() => Organization)
export class OrganizationsResolver {
  constructor(
    private readonly organizationsService: OrganizationsService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => Organization)
  async createOrganization(
    @Args('input') organization: CreateOrganizationInput,
  ) {
    return this.organizationsService.create(organization);
  }

  @Query(() => [Organization], { name: 'organizations' })
  findAll() {
    return this.organizationsService.findAll();
  }

  @Query(() => Organization, { name: 'organization' })
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.organizationsService.findById(id);
  }

  @Mutation(() => Organization)
  removeOrganization(@Args('id', { type: () => String }) id: string) {
    return this.organizationsService.remove(id);
  }

  @ResolveField(() => User)
  async users(@Parent() parent: Organization) {
    return this.usersService.findByUserId(parent.users);
  }
}
