import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';

import { Organization } from '../organizations/organization.model';

@Schema({ timestamps: true })
export class Course extends Document {
  @Prop({
    type: mongoose.Types.ObjectId,
    auto: true,
    required: false,
    default: function () {
      return new mongoose.Types.ObjectId();
    },
  })
  _id: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Types.ObjectId, ref: Organization.name })
  organizationId: Organization;

  @Prop({
    type: String,
    required: true,
  })
  courseName: string;

  @Prop({
    type: String,
    required: false,
  })
  courseType: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
