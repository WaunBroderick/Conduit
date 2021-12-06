import { Document } from 'mongoose';
export interface Organization extends Document {
    readonly name: string;
    readonly address: string;
    readonly logo: string;
    readonly departments: string;
}
