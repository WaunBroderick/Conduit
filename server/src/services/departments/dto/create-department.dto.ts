import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { User } from 'src/services/users/user.model';

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

  // TODO: Create validation for arrays of ObjectIds and extend that to all instances in UML Diagram
  @ApiProperty({
    type: Array,
    default: null,
    required: true,
    nullable: false,
    description: 'The list of users that are administrators of this department',
  })
  admins: [User];
}
