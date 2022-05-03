import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User } from '../users/users.schema';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';

export type OrganizationDocument = Organization & mongoose.Document;

@Schema()
@ObjectType()
export class Organization {
  @Field(() => MongoId)
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field({ nullable: true })
  address: string;

  @Prop()
  @Field({ nullable: true })
  logo: string;

  @Prop()
  @Field({ nullable: true })
  country: string;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
  @Field(() => [User], { nullable: true })
  users?: User[];

  static id: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

@InputType()
export class FindOrganizationInput {
  @Field()
  _id: string;
}
