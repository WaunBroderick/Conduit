import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';

//GraphQL Migration
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiTooManyRequestsResponse } from '@nestjs/swagger';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AssignmentsModule } from './services/assignments/assignments.module';
import { OrganizationsModule } from './services/organizations/organizations.module';
import { CoursesModule } from './services/courses/courses.module';
import { UsersModule } from './services/users/users.module';
import { RolesModule } from './services/roles/roles.module';
import { DepartmentsModule } from './services/departments/departments.module';
import { AuthModule } from './services/auth/auth.module';
import { SeedsModule } from './services/shared/seeds.module';
import { MultiplechoiceModule } from './services/content/multiplechoice/multiplechoice.module';

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        origin: '*',
        credentials: true,
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    OrganizationsModule,
    AssignmentsModule,
    CoursesModule,
    RolesModule,
    DepartmentsModule,
    AuthModule,
    SeedsModule,
    CommandModule,
    MultiplechoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
