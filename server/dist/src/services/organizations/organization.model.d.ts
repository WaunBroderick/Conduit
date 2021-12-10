import { Document } from 'mongoose';
export declare class Organization extends Document {
    name: string;
    address: string;
    logo: string;
    departments: string;
}
export declare const OrganizationSchema: import("mongoose").Schema<Organization, import("mongoose").Model<Organization, any, any, any>, any>;
