import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class User extends Document {
    name: string;
    email: string;
    organization: mongoose.Types.ObjectId;
    password: string;
    departments: [];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any>, any>;
