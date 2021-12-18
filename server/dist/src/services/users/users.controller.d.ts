import { UsersService } from './users.service';
import { AssignUserDepartmentDto } from './dto/assign-user-department';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(res: any, paginationQuery: PaginationQueryDto): Promise<any>;
    getUser(Res: any, id: string): Promise<any>;
    assignUserDepartment(res: any, userId: string, assignUserDepartmentDto: AssignUserDepartmentDto): Promise<any>;
}
