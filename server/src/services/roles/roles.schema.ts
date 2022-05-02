import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User } from '../users/users.schema';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';

export type RoleDocument = Role & mongoose.Document;

@Schema()
@ObjectType()
export class Role {
  @Field(() => MongoId)
  id: string;

  @Prop()
  @Field()
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

@InputType()
export class CreateRoleInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  address: string;
}

@InputType()
export class FindRoleInput {
  @Field()
  _id: string;
}
