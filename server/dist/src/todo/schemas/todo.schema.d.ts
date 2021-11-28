import { Document } from 'mongoose';
export declare type TodoDocument = Todo & Document;
export declare class Todo {
    title: string;
    description?: string;
    completedAt?: Date;
    createdAt: Date;
    deletedAt?: Date;
}
export declare const TodoSchema: import("mongoose").Schema<Document<Todo, any, any>, import("mongoose").Model<Document<Todo, any, any>, any, any, any>, {}>;
