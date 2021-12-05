import * as mongoose from 'mongoose';

export const DepartmentsSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  organization: { type: mongoose.Types.ObjectId, required: true },
  subSection: { type: String },
});
