import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema, Organization } from './organizations.schema';
import { UsersService } from 'src/users/users.service';
import { User, UserSchema } from 'src/users/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Organization.name, schema: OrganizationSchema },
    ]),
  ],
  providers: [OrganizationsResolver, OrganizationsService],
})
export class OrganizationsModule {}
