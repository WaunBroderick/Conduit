import { Injectable, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './interfaces/department.interface';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel('Department') private departmentModel: Model<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<void> {
    const { name, organization, subSection } = createDepartmentDto;
    const Department = new this.departmentModel({
      name,
      organization,
      subSection,
    });

    try {
      await Department.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Department already exists');
      }
      throw error;
    }
  }

  findAll() {
    return `This action returns all departments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
