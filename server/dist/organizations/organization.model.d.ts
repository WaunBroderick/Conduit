import * as mongoose from 'mongoose';
export declare const OrganizationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export declare class Organization {
    id: string;
    name: string;
    address: string;
    logo: string;
}
