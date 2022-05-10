import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateAssignmentInput } from './dto/update-assignment.input';
import { Assignment, AssignmentDocument } from './assignments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssignmentInput } from './dto/create-assignment.input';

var mongoose = require('mongoose');

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
    const assignments = await this.assignmentModel
      .find({ user: userId })
      .exec();
    if (!assignments) {
      throw new NotFoundException(`User ${userId} not found`);
    }
    return assignments;
  }

  update(id: number, updateAssignmentInput: UpdateAssignmentInput) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
