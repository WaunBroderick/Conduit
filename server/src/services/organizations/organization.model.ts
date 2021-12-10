import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Organization extends Document {
  @Prop({ unique: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  logo: string;

  @Prop()
  departments: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
