import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  logo: { type: String },
  departments: { type: String },
});

export class Organization {
  id: string;
  name: string;
  address: string;
  logo: string;
  departments: string;
}
