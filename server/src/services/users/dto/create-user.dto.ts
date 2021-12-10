import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: number;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  password: string;
}

