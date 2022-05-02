import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Organization } from '../organizations/organizations.schema';
import { User } from '../users/users.schema';

import * as mongoose from 'mongoose';
import MongoId from 'src/common/scalars/mongo-id.scalar';

export type AssignmentDocument = Assignment & mongoose.Document;

@Schema()
@ObjectType()
export class Assignment {
  @Field(() => MongoId, { nullable: true })
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  @Field(() => Organization, { nullable: true })
  organization: Organization | string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User, { nullable: true })
  user: User | string;
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
