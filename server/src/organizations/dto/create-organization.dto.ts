import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class CreateOrganizationDto {
  @ApiProperty({
    description: 'The name of the organization',
    type: String,
  })
  name: string;

  @ApiPropertyOptional({
    description: 'The address of the Organzation',
    type: String,
  })
  address: string;

  @ApiPropertyOptional({
    description: 'The logo of the organization',
  })
  logo: string;

  @ApiPropertyOptional({
    description:
      'The group of departments under the Organization that this organization owns',
  })
  departments: string;
}
