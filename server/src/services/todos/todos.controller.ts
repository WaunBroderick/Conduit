import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  HttpCode,
  ValidationPipe,
  HttpStatus,
  Res,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ description: 'Create an organization Role' })
  @ApiParam({
    name: 'testing',
    required: true,
    description: 'its a description?...',
    schema: { oneOf: [{ type: 'string' }] },
  })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  public async findAll(@Query() { offset, limit }: PaginationQueryDto) {
    return this.todosService.findAll(offset, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    //return id;
    return this.todosService.remove(id);
  }
}
