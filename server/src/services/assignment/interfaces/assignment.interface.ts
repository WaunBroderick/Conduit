import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/user.model';

export interface IAssignment extends Document {
  readonly employeeId: User;
}
