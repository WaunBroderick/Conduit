import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Department } from '../departments/department.model';

import * as mongoose from 'mongoose';

export type RoleDocument = Role & Document;
@Schema()
export class Role {
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
    unique: true,
    type: String,
    required: true,
  })
  roleName: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: Department.name })
  departmentsWithin: [Department];

  @Prop({
    type: Array,
    required: false,
  })
  requiredWork: [string];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
