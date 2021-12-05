import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type DepartmentDocument = Department & Document;
export declare class Department {
    name: string;
    organization: mongoose.Types.ObjectId;
    subSection: String;
}
export declare const DepartmentSchema: mongoose.Schema<Document<Department, any, any>, mongoose.Model<Document<Department, any, any>, any, any, any>, any>;
