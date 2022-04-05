import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { ToDos } from './todos.model';
import { Model } from 'mongoose';
import { IToDos } from './interfaces/todos.interface';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(ToDos.name)
    private readonly todosModel: Model<ToDos>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<IToDos> {
    const newToDo = await new this.todosModel(createTodoDto);
    return newToDo.save();
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
