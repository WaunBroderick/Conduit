import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './services/auth/auth.module';
import { AppService } from './app.service';
import { UsersModule } from './services/users/users.module';
import { OrganizationsController } from './services/organizations/organizations.controller';
import { OrganizationsModule } from './services/organizations/organizations.module';
import { DepartmentsModule } from './services/departments/departments.module';
import { AssignmentModule } from './services/assignment/assignment.module';
import { RolesModule } from './services/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      // For STAGING MongoDB server
      //`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_DB_ADDRESS}/${process.env.MONGO_ATLAS_DB}`,
      // For local development
      `mongodb://localhost:27017/conduit-STAGING`,
    ),
    UsersModule,
    OrganizationsModule,
    DepartmentsModule,
    AuthModule,
    AssignmentModule,
    RolesModule,
  ],
  controllers: [AppController, OrganizationsController],
  providers: [AppService],
})
export class AppModule {}
