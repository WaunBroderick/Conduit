import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';

export type AssignmentDocument = Assignment & mongoose.Document;

@Schema()
@ObjectType()
export class Assignment {
  @Prop()
  @Field()
  name: string;
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);

//AssignmentSchema.index({ author: 1 });

@InputType()
export class CreateAssignmentInput {
  @Field()
  name: string;
}

@InputType()
export class FindAssignmentInput {
  @Field()
  _id: string;
}
