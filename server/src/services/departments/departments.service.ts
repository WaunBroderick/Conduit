import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Department, DepartmentDocument } from './departments.schema';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Model } from 'mongoose';
import { OrganizationDocument } from '../organizations/organizations.schema';

@Injectable()
export class DepartmentsService {
  deparments: Partial<Department>[];
  constructor(
    @InjectModel(Department.name)
    private departmentModel: Model<DepartmentDocument>,
  ) {}

  async create(department: CreateDepartmentInput) {
    return this.departmentModel.create(department);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().lean();
  }

  async findOne(id: number) {
    return this.departmentModel.findById(id).lean();
  }

  async findById(id) {
    return this.departmentModel.findById(id).lean();
  }

  async findByOrganizationId(id) {
    return this.departmentModel.find({ organization: id }).lean();
  }

  update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
    return `This action updates a #${id} department`;
  }

  async remove(id: string): Promise<Department> {
    return await this.departmentModel.findByIdAndRemove(id);
  }
}
