import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import * as mongoose from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  organization: mongoose.Types.ObjectId;

  @Prop()
  password: string;

  @Prop()
  departments: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
