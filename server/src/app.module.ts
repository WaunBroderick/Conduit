import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrganizationsController } from './organizations/organizations.controller';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
   MongooseModule.forRoot('mongodb://localhost/conduit-STAGING'),
  TodoModule,
  AuthModule,
  UsersModule,
  OrganizationsModule],
  controllers: [AppController, OrganizationsController],
  providers: [AppService],
})
export class AppModule {}
