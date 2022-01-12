import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';
import { Organization } from '../organizations/organization.model';

export type DepartmentDocument = Department & Document;
@Schema()
export class Department {
  @Prop({
    type: mongoose.Types.ObjectId,
    auto: true,
    required: false,
    default: function () {
      return new mongoose.Types.ObjectId();
    },
  })
  _id: mongoose.Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: Organization.name })
  organizationId: Organization;

  @Prop({
    type: String,
    required: true,
  })
  subSection: string;
}

export const DeparmentSchema = SchemaFactory.createForClass(Department);
