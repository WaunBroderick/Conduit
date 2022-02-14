import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import * as mongoose from 'mongoose';

export class CreateAssignmentDto {
  @ApiProperty({
    type: mongoose.Types.ObjectId,
    default: null,
    required: true,
    nullable: false,
    description: 'The employee the assignment belongs to',
  })
  @Prop()
  employeeId: string;

  @ApiProperty({
    type: mongoose.Types.ObjectId,
    default: null,
    required: true,
    nullable: false,
    description: 'The organization the assignment belongs to',
  })
  @Prop()
  organizationId: string;

  @ApiProperty({
    type: Date,
    default: null,
    required: false,
    nullable: true,
    description: 'The due date or deadline for the assignment given',
  })
  dueDate: Date;
}
