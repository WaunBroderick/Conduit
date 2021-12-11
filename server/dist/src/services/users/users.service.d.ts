import { User } from './user.model';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { AssignUserDepartmentDto } from './dto/assign-user-department';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    updateUserDepartments(userId: string, assignUserDepartmentDto: AssignUserDepartmentDto): Promise<IUser>;
}
