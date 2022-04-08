import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
export class CreateTodoDto {
  @ApiProperty({
    type: String,
    default: null,
    required: true,
    nullable: false,
    description: 'Assignment Id the ToDo list belongs to.',
  })
  assignmentId: mongoose.Types.ObjectId;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    description: 'Name of the To-Do list',
  })
  name: string;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    description: 'Description of the To-Do List',
  })
  description: string;

  @ApiProperty({
    type: Array,
    required: false,
    nullable: false,
    description: 'The To-Do list',
  })
  tasks: [];

  @ApiProperty({
    type: Boolean,
    default: false,
    required: false,
    nullable: false,
    description: 'Completion state of the ToDos',
  })
  completion: boolean;
}
