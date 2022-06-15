import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';

export type RBTestDocument = RBTest & mongoose.Document;

@Schema()
@ObjectType()
export class RBTest {
  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  question: string;

  @Prop()
  @Field()
  answer: string;
}
