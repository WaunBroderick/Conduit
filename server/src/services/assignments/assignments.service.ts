import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAssignmentInput } from './dto/update-assignment.input';
import {
  Assignment,
  AssignmentDocument,
  CreateAssignmentInput,
} from './assignments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

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

  findOne(id: number) {
    return `This action returns a #${id} assignment`;
  }

  update(id: number, updateAssignmentInput: UpdateAssignmentInput) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
