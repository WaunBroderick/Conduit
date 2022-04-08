import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Department extends Document {
  readonly name: string;
  readonly organization: string;
  readonly subSection: string;
  readonly admins: [mongoose.Types.ObjectId];
}
