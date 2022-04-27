import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Organization } from 'src/organizations/organizations.schema';

import * as mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field()
  firstName: string;

  @Prop()
  @Field()
  lastName: string;

  @Prop()
  @Field()
  email: string;

  //@Prop({ type: mongoose.Schema.Types.ObjectId, ref: Organization.name })
  //@Field(() => Organization)
  //organization: Organization;

  @Prop()
  @Field()
  password: string;

  @Prop()
  @Field({ nullable: true })
  isAdmin: boolean;

  @Prop()
  @Field({ nullable: true })
  online: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

//UserSchema.index({ author: 1 });

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field(() => Organization, { nullable: true })
  organization: Organization;

  @Field()
  password: string;

  @Field({ nullable: true })
  isAdmin: boolean;

  @Field({ nullable: true })
  online: boolean;
}

@InputType()
export class FindUserInput {
  @Field()
  _id: string;
}
