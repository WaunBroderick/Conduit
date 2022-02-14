import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Department } from 'src/services/departments/department.model';

export interface IRole extends Document {
  readonly _id: mongoose.Types.ObjectId;
  readonly roleName: string;
  readonly departmentsWithin: [Department];
  readonly requiredWork: [string];
}
