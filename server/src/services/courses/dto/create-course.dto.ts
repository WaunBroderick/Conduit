import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import * as mongoose from 'mongoose';

export class CreateCourseDto {
  @ApiProperty({
    type: mongoose.Types.ObjectId,
    default: null,
    required: true,
    nullable: false,
    description: 'The organization the course belongs to',
  })
  @Prop()
  organizationId: string;

  @ApiProperty({
    type: String,
    default: null,
    required: false,
    nullable: true,
    description: 'The Name of the course',
  })
  courseName: Date;

  @ApiProperty({
    type: String,
    default: null,
    required: false,
    nullable: true,
    description: 'The type of the course',
  })
  courseType: Date;
}
