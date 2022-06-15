import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';
import { RBTest } from '../shared/rbtest.schema';

export type MultipleChoiceDocument = MultipleChoice & mongoose.Document;

@Schema()
@ObjectType()
export class MultipleChoice {
  @Field(() => MongoId)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field(() => [RBTest])
  content: RBTest[];
}

export const MultipleChoiceSchema =
  SchemaFactory.createForClass(MultipleChoice);
