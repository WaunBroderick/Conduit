import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class CreateDepartmentDto {
  @ApiProperty({
    description: 'The name of the department within the organization',
    type: String,
  })
  name: string;

  @ApiProperty({
    type: mongoose.Types.ObjectId,
    default: null,
    required: true,
    nullable: false,
    description: 'The organization the department belongs to',
  })
  @Prop()
  organization: string;

  @ApiPropertyOptional({
    description:
      'The group of departments under the Organization that this department belongs to',
  })
  subSection: string;
}
