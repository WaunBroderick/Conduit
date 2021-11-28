import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
    name: { type: String, required: true},
    address: { type: String},
    logo: { type: String }
});

export class Organization {
        id: string;
        name: string;
        address: string;
        logo: string;

}