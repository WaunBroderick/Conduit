import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';
import { User } from '../users/user.model';

@Schema()
export class Assignment extends Document {
  @Prop({ type: mongoose.Types.ObjectId, ref: User.name })
  employeeId: User;
}

export const UserSchema = SchemaFactory.createForClass(Assignment);
