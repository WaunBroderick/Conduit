import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';

export type CourseDocument = Course & mongoose.Document;

@Schema()
@ObjectType()
export class Course {
  @Field(() => MongoId)
  id: string;

  @Prop()
  @Field()
  name: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);

@InputType()
export class CreateCourseInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  address: string;
}

@InputType()
export class FindCourseInput {
  @Field()
  _id: string;
}
