import * as mongoose from 'mongoose';
import { ObjectUnsubscribedError } from 'rxjs';

export const DepartmentsSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  logo: { type: String },
  departments: [{ type: mongoose.Types.ObjectId, ref: 'Department' }],
});
