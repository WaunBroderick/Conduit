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
    description: '',
  })
  @Prop()
  employeeId: string;
}
