import { Document } from 'mongoose';
export interface IUser extends Document {
    readonly name: string;
    readonly email: string;
    readonly organization: string;
    readonly departments: [];
}
