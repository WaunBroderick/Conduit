import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Organization } from '../organizations/organizations.schema';
import { User } from '../users/users.schema';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';
import { Course } from '../courses/courses.schema';

export type AssignmentDocument = Assignment & mongoose.Document;

@Schema()
@ObjectType()
export class Assignment {
  @Field(() => MongoId, { nullable: true })
  _id: string;

  @Prop()
  @Field({ nullable: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  @Field(() => Organization, { nullable: true })
  organization: Organization | string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  @Field(() => Course, { nullable: true })
  course: Course | string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User, { nullable: true })
  user: User | string;
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
