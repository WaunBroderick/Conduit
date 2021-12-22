import { User } from './user.model';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { AssignUserDepartmentDto } from './dto/assign-user-department';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(paginationQuery: PaginationQueryDto): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findByOrg(orgId: string): Promise<User[]>;
    updateUserDepartments(userId: string, assignUserDepartmentDto: AssignUserDepartmentDto): Promise<IUser>;
}
