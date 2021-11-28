import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    organization: { type: String, required: true},
    password: { type: String, required: true},
});

export class User {
        id: string;
        name: string;
        email: string;
        organization: string;
        password: string;
}