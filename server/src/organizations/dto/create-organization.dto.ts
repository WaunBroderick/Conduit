import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class CreateOrganizationDto {
  @ApiProperty({
    description: 'The name of the department within the organization',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The name of the department within the organization',
    type: String,
  })
  organization: string;

  @ApiPropertyOptional({
    description:
      'The group of departments under the Organization that this department belongs to',
  })
  subSection: string;
}
