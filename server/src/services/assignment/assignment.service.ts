import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

import { IAssignment } from '../assignment/interfaces/assignment.interface';
import { Assignment } from './assignment.model';
import { Model } from 'mongoose';

var mongoose = require('mongoose');

@Injectable()
export class AssignmentService {
  constructor(
    @InjectModel(Assignment.name)
    private readonly assignmentModel: Model<Assignment>,
  ) {}

  public async create(
    createAssignmentDto: CreateAssignmentDto,
  ): Promise<IAssignment> {
    const newAssignment = await new this.assignmentModel(createAssignmentDto);
    return newAssignment.save();
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const query = this.assignmentModel
      .find()
      .skip(documentsToSkip)
      .limit(Number(limitOfDocuments));

    const results = await query;
    const count = await this.assignmentModel.count();

    return { results, count };
  }

  public async findOne(id: string): Promise<IAssignment> {
    const ID = mongoose.Types.ObjectId(id);
    const Assignment = await this.assignmentModel.findById(ID).exec();

    return Assignment;
  }

  public async findAllByUserId(id: string): Promise<any> {
    const ID = mongoose.Types.ObjectId(id);
    const Assignment = await this.assignmentModel
      .find({
        employeeId: ID,
      })
      .exec();

    return Assignment;
  }

  async update(id: string, updateAssignmentDto: UpdateAssignmentDto) {
    const ID = mongoose.Types.ObjectId(id);
    const Assignment = await this.assignmentModel.findByIdAndUpdate(
      ID,
      updateAssignmentDto,
      {
        new: true,
      },
    );
    return Assignment;
  }

  async remove(id: string): Promise<any> {
    const ID = mongoose.Types.ObjectId(id);
    const deletedAssignment = await this.assignmentModel.findByIdAndRemove(ID);

    return deletedAssignment;
  }
}
