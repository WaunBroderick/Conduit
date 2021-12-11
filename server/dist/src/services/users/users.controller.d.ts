import { UsersService } from './users.service';
import { AssignUserDepartmentDto } from './dto/assign-user-department';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    assignUserDepartment(res: any, userId: string, assignUserDepartmentDto: AssignUserDepartmentDto): Promise<any>;
}
