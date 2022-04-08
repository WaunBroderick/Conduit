import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IOrganization extends Document {
  readonly _id: mongoose.Types.ObjectId;
  readonly name: string;
  readonly address: string;
  readonly logo: string;
  readonly departments: string;
}
