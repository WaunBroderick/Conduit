import { InputType, Int, Field } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { Organization } from 'src/services/organizations/organizations.schema';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  isAdmin: boolean;

  @Field({ nullable: true })
  online: boolean;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  assignments: string;
}
