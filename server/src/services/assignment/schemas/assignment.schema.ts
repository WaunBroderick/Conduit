import * as mongoose from 'mongoose';

export const AssignmentSchema = new mongoose.Schema(
  {
    organizationId: { type: mongoose.Types.ObjectId, required: true },
    employeeId: { type: mongoose.Types.ObjectId, required: true },
    dueDate: { type: Date, required: false },
  },
  {
    timestamps: true,
  },
);
