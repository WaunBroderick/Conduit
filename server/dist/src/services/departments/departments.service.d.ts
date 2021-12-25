import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Model } from 'mongoose';
import { Department } from './interfaces/department.interface';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
export declare class DepartmentsService {
    private departmentModel;
    constructor(departmentModel: Model<Department>);
    create(createDepartmentDto: CreateDepartmentDto): Promise<void>;
    findAll(paginationQuery: PaginationQueryDto): Promise<Department[]>;
    findOne(id: number): string;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: number): string;
}
