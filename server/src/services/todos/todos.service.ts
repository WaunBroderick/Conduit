import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { ToDos } from './todos.model';
import { Model, Types } from 'mongoose';
import { IToDos } from './interfaces/todos.interface';

import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

var mongoose = require('mongoose');

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

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const query = this.todosModel
      .find()
      .skip(documentsToSkip)
      .limit(Number(limitOfDocuments));

    const results = await query;
    const count = await this.todosModel.count();

    return { results, count };
  }

  public async findOne(id: string): Promise<ToDos> {
    const ID = mongoose.Types.ObjectId(id);
    const ToDo = await this.todosModel.findById(ID).exec();

    return ToDo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const ID = mongoose.Types.ObjectId(id);
    const ToDo = await this.todosModel.findByIdAndUpdate(ID, updateTodoDto, {
      new: true,
    });
    return ToDo;
  }

  async remove(id: string): Promise<any> {
    const ID = mongoose.Types.ObjectId(id);
    const deletedToDo = await this.todosModel.findByIdAndRemove(ID);

    return deletedToDo;
  }
}
