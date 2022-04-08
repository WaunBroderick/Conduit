import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';

export type OrganizationDocument = Organization & Document;
@Schema()
export class Organization {
  @Prop({
    type: mongoose.Types.ObjectId,
    auto: true,
    required: false,
    default: function () {
      return new mongoose.Types.ObjectId();
    },
  })
  _id: mongoose.Types.ObjectId;

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
