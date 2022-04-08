import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';
import { Role } from '../roles/role.model';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: false })
  organization: mongoose.Types.ObjectId;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  departments: [];

  @Prop({ required: false })
  userRoles: [mongoose.Types.ObjectId];

  @Prop({ required: true })
  online: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
