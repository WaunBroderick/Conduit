import { User } from './user.model';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly UserModel;
    private users;
    constructor(UserModel: Model<User>);
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    createUser(name: string, email: string, organization: string, password: string): Promise<void>;
}
