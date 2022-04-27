import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';

@Module({
  providers: [DepartmentsResolver, DepartmentsService]
})
export class DepartmentsModule {}
