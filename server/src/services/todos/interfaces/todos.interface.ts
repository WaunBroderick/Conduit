import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IToDos extends Document {
  readonly _id: mongoose.Types.ObjectId;
  readonly name: string;
  readonly assignmentId: mongoose.Types.ObjectId;
  readonly description: string;
  readonly tasks: [];
  readonly completion: boolean;
}
