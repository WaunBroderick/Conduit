import * as mongoose from 'mongoose';

export const todosSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    assignmentId: { type: mongoose.Types.ObjectId, required: true },
    description: { type: String },
    tasks: { type: Array },
    completion: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);
