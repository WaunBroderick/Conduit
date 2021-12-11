import { Document } from 'mongoose';
export declare class User extends Document {
    name: string;
    email: string;
    organization: string;
    password: string;
    departments: [];
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any>;
