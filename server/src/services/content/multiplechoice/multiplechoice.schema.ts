import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';

export type MultipleChoiceDocument = Course & mongoose.Document;

@Schema()
@ObjectType()
export class Course {
  @Field(() => MongoId)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  content: Object;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
