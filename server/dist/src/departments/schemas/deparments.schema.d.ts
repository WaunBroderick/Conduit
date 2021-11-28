import { Document } from 'mongoose';
export declare type DepartmentDocument = Department & Document;
export declare class Department {
    name: string;
    organization: string;
    subSection: String;
}
export declare const DepartmentSchema: import("mongoose").Schema<Document<Department, any, any>, import("mongoose").Model<Document<Department, any, any>, any, any, any>, {}>;
