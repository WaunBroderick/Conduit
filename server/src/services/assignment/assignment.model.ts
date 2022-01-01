import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';
import { User } from '../users/user.model';
import { Organization } from '../organizations/organization.model';

@Schema({ timestamps: true })
export class Assignment extends Document {
  @Prop({ type: mongoose.Types.ObjectId, ref: Organization.name })
  organizationId: Organization;

  @Prop({ type: mongoose.Types.ObjectId, ref: User.name })
  employeeId: User;
}

export const UserSchema = SchemaFactory.createForClass(Assignment);
