import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrganizationsController } from './organizations/organizations.controller';
import { OrganizationsModule } from './organizations/organizations.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/conduit-STAGING'),

    UsersModule,
    OrganizationsModule,
    DepartmentsModule,
    AuthModule,
  ],
  controllers: [AppController, OrganizationsController],
  providers: [AppService],
})
export class AppModule {}
