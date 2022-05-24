import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { UserSeed } from '../users/seeds/user.seed';
import { UsersModule } from '../users/users.module';
import { OrganizationSeed } from '../organizations/seeds/organizations.seed';
import { OrganizationsModule } from '../organizations/organizations.module';
import { DepartmentsModule } from '../departments/departments.module';
import { DepartmentsSeed } from '../departments/seeds/departments.seed';

@Module({
  imports: [CommandModule, UsersModule, OrganizationsModule, DepartmentsModule],
  providers: [UserSeed, OrganizationSeed, DepartmentsSeed],
  exports: [UserSeed, OrganizationSeed, DepartmentsSeed],
})
export class SeedsModule {}
