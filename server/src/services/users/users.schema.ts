import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Organization } from 'src/services/organizations/organizations.schema';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';
import { Assignment } from '../assignments/assignments.schema';

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

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignments' },
  })
  @Field(() => [Assignment], { nullable: true })
  assignment?: Assignment[];
}

export const UserSchema = SchemaFactory.createForClass(User);
