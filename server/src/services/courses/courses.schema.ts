import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';
import { Assignment } from '../assignments/assignments.schema';

export type CourseDocument = Course & mongoose.Document;

@Schema()
@ObjectType()
export class Course {
  @Field(() => MongoId)
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' } })
  @Field(() => [Assignment])
  assignments: Assignment[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);

@InputType()
export class FindCourseInput {
  @Field()
  _id: string;
}
