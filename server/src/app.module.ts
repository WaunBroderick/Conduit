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
