import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: string): string;
}
