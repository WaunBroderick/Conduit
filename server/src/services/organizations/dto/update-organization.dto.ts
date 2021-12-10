import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationDto } from './create-organization.dto';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}
