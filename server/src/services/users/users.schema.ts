import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Organization } from 'src/services/organizations/organizations.schema';

import * as mongoose from 'mongoose';
import MongoId from 'common/scalars/mongo-id.scalar';

export type UserDocument = User & mongoose.Document;

@Schema()
@ObjectType()
export class User {
  @Field(() => MongoId)
  id: string;

  @Prop()
  @Field()
  firstName: string;

  @Prop()
  @Field()
  lastName: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  @Field()
  password: string;

  @Prop()
  @Field({ nullable: true })
  isAdmin: boolean;

  @Prop()
  @Field({ nullable: true })
  online: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  @Field(() => Organization, { nullable: true })
  organization: Organization | string;
}

export const UserSchema = SchemaFactory.createForClass(User);

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  organization: string;

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
