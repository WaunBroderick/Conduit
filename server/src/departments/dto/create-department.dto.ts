import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class CreateDepartmentDto {
    @ApiProperty({
        description: 'The name of the department within the organization',
        type: String,
    })
    name: string;

    @ApiProperty()
    organization: string;

    @ApiPropertyOptional({
        description: 'The group of departments under the Organization that this department belongs to'
    })
    subSection: string;
}
