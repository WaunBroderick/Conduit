import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly organization: mongoose.Types.ObjectId;
  readonly departments: [];
  readonly online: boolean;
}
