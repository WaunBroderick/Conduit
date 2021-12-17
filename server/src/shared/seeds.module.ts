import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { DepartmentsSeed } from 'src/services/departments/seeds/departments.seed';
import { DepartmentsModule } from 'src/services/departments/departments.module';

@Module({
  imports: [CommandModule, DepartmentsModule],
  providers: [DepartmentsSeed],
  exports: [DepartmentsSeed],
})
export class SeedsModule {}
