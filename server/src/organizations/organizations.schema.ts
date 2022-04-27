import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';

export type OrganizationDocument = Organization & mongoose.Document;

@Schema()
@ObjectType()
export class Organization {
  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field({ nullable: true })
  address: string;

  @Prop()
  @Field({ nullable: true })
  logo: string;

  @Prop()
  @Field({ nullable: true })
  country: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

//OrganizationSchema.index({ author: 1 });

@InputType()
export class CreateOrganizationInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  address: string;
}

@InputType()
export class FindOrganizationInput {
  @Field()
  _id: string;
}
