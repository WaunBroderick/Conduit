import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema } from './organization.model'
import { OrganizationsController } from './organizations.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Organization', schema: OrganizationSchema}])
  ],
  providers: [OrganizationsService],
  exports: [OrganizationsService],
  controllers: [OrganizationsController]
})
export class OrganizationsModule {}
