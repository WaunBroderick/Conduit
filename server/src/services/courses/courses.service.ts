import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

import { ICourse } from './interfaces/course.interface';
import { Course } from './course.model';
import { Model } from 'mongoose';

var mongoose = require('mongoose');

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name)
    private readonly courseModel: Model<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<ICourse> {
    const newCourse = await new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  public async findAllByOrgId(id: string): Promise<any> {
    const ID = mongoose.Types.ObjectId(id);
    const Courses = await this.courseModel
      .find({
        organizationId: ID,
      })
      .exec();

    return Courses;
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const query = this.courseModel
      .find()
      .skip(documentsToSkip)
      .limit(Number(limitOfDocuments));

    const results = await query;
    const count = await this.courseModel.count();

    return { results, count };
  }

  async findAllByAssignmentId(id: string): Promise<any> {
    const ID = mongoose.Types.ObjectId(id);
    const Courses = await this.courseModel
      .find({
        assignmentId: ID,
      })
      .exec();

    return Courses;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }

  async getAllUserCourses(): Promise<any> {}
}
