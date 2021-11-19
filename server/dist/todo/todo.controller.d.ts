import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly service;
    constructor(service: TodoService);
    index(): Promise<import("./schemas/todo.schema").Todo[]>;
    find(id: string): Promise<import("./schemas/todo.schema").Todo>;
    create(createTodoDto: CreateTodoDto): Promise<import("./schemas/todo.schema").Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("./schemas/todo.schema").Todo>;
    delete(id: string): Promise<import("./schemas/todo.schema").Todo>;
}
