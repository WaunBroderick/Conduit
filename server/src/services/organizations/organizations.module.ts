import { forwardRef, Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema, Organization } from './organizations.schema';
import { UsersService } from 'src/services/users/users.service';
import { User, UserSchema } from 'src/services/users/users.schema';
import MongoIdScalar from 'src/common/scalars/mongo-id.scalar';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Organization.name, schema: OrganizationSchema },
      { name: User.name, schema: UserSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    OrganizationsResolver,
    OrganizationsService,
    MongoIdScalar,
    UsersService,
  ],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
