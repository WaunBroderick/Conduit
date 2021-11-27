import { User } from './user.model';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly UserModel;
    private users;
    constructor(UserModel: Model<User>);
    createUser(name: string, organization: string, email: string, password: string): Promise<string>;
    findOne(name: string): Promise<User | undefined>;
}
