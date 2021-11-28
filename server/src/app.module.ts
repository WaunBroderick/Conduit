import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrganizationsController } from './organizations/organizations.controller';
import { OrganizationsModule } from './organizations/organizations.module';
import { ConfigModule } from '@nestjs/config';
import { DepartmentsModule } from './departments/departments.module';



@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.DATABASE_STRING),
  AuthModule,
  UsersModule,
  OrganizationsModule,
  DepartmentsModule,
],
  controllers: [AppController, OrganizationsController],
  providers: [AppService],
})
export class AppModule {}
