import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//GraphQL Migration
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './services/auth/auth.module';
import { AppService } from './app.service';
import { OrganizationsController } from './services/organizations/organizations.controller';
import { AssignmentModule } from './services/assignment/assignment.module';
import { TodosModule } from './services/todos/todos.module';
import { ApiTooManyRequestsResponse } from '@nestjs/swagger';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AuthService } from './services/auth/auth.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // For STAGING MongoDB server
      //`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_DB_ADDRESS}/${process.env.MONGO_ATLAS_DB}`,
      // For local development
      `mongodb://localhost:27017/conduit-STAGING`,
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        origin: 'http://localhost:5000',
        credentials: true,
      },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthModule,
    UsersModule,
    OrganizationsModule,
    AssignmentsModule,
    CoursesModule,
    RolesModule,
    DepartmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
