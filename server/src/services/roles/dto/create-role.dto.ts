import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class CreateRoleDto {
  @ApiProperty({
    type: String,
    default: null,
    required: true,
    nullable: false,
    description: 'Name of the role withing your Organization',
  })
  roleName: string;

  @ApiProperty({
    type: Array,
    default: null,
    required: true,
    nullable: false,
    description: 'All the departments this role is associated with',
  })
  departmentsWithin: [string];

  @ApiProperty({
    type: Array,
    default: null,
    required: false,
    nullable: true,
    description:
      'The courses that anyone who is assigned this role will automatically assigned',
  })
  requiredWork: [string];
}
