import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';
import { number } from 'yargs';

export class PaginationQueryDto {
  @ApiProperty({
    type: number,
    default: null,
    required: false,
    nullable: true,
    description: 'To limit the number of results pulled',
  })
  @IsOptional()
  @IsPositive()
  limit: number;

  @ApiProperty({
    type: number,
    default: null,
    required: false,
    nullable: true,
    description: 'State how many rows you want to ski',
  })
  @IsOptional()
  @IsPositive()
  offset: number;
}
