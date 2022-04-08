import { IsArray, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class AssignUserDepartmentDto {
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
    isArray: true,
  })
  @IsArray()
  @IsOptional()
  departments?: [];

  @ApiProperty({
    type: Boolean,
    default: false,
    required: false,
    nullable: true,
    description: 'A flag to track if the user is online or not',
  })
  @IsBoolean()
  @IsOptional()
  online?: boolean;
}
