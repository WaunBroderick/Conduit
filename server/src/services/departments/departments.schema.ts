import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User } from '../users/users.schema';

import * as mongoose from 'mongoose';
import MongoId from 'common/scalars/mongo-id.scalar';
import { Organization } from '../organizations/organizations.schema';

export type DepartmentDocument = Department & mongoose.Document;

@Schema()
@ObjectType()
export class Department {
  @Field(() => MongoId)
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field({ nullable: true })
  subSections?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  @Field(() => Organization, { nullable: true })
  organization: Organization | string;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
  @Field(() => [User], { nullable: true })
  admins?: User[];
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);

@InputType()
export class CreateDepartmentInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  admins: string;
}

@InputType()
export class FindDepartmentInput {
  @Field()
  _id: string;
}
