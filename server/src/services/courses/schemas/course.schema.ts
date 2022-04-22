import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema(
  {
    organizationId: { type: mongoose.Types.ObjectId, required: true },
    courseName: { type: String, required: true },
    courseType: { type: String },
  },
  {
    timestamps: true,
  },
);
