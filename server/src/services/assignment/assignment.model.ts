import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';
import { User } from '../users/user.model';
import { Organization } from '../organizations/organization.model';

@Schema({ timestamps: true })
export class Assignment extends Document {
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

  @Prop({ type: mongoose.Types.ObjectId, ref: User.name })
  employeeId: User;

  @Prop({
    type: String,
    required: true,
  })
  courseId: string;

  @Prop({
    type: Date,
    required: false,
  })
  dueDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(Assignment);
