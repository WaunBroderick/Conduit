import * as mongoose from 'mongoose';

export const AssignmentSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Types.ObjectId, required: true },
});
