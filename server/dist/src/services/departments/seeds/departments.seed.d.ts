import { DepartmentsService } from 'src/services/departments/departments.service';
export declare class DepartmentsSeed {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(): Promise<void>;
}
