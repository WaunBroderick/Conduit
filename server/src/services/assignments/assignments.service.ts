import { Injectable } from '@nestjs/common';
import { UpdateAssignmentInput } from './dto/update-assignment.input';
import { Assignment, AssignmentDocument } from './assignments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssignmentInput } from './dto/create-assignment.input';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel(Assignment.name)
    private assignmentModel: Model<AssignmentDocument>,
  ) {}

  async createAssignment(assignment: CreateAssignmentInput) {
    return this.assignmentModel.create(assignment);
  }

  async findAll(): Promise<Assignment[]> {
    return this.assignmentModel.find().lean();
  }

  async findById(id: string) {
    return this.assignmentModel.findById(id).lean();
  }

  async findByUserId(userId) {
    return this.assignmentModel.find({ user: userId });
  }

  update(id: number, updateAssignmentInput: UpdateAssignmentInput) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
