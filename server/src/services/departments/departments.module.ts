import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsSchema } from './schemas/departments.schema';
import { OrganizationsModule } from '../organizations/organizations.module';
import { AbilityModule } from '../../permissions/ability.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentsSchema },
    ]),
    OrganizationsModule,
    AbilityModule,
  ],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
  exports: [DepartmentsService],
})
export class DepartmentsModule {}
