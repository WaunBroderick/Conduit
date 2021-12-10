import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Res,
  NotFoundException,
  HttpStatus,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@ApiTags('Organizational')
@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Post()
  public async createOrganization(
    @Res() res,
    @Body() createOrganizationDto: CreateOrganizationDto,
  ) {
    try {
      const organization = await this.organizationsService.create(
        createOrganizationDto,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Organization has been created successfully',
        organization,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Customer not created!',
        status: 400,
      });
    }
  }

  @Get()
  public async getAllOrganizations(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const organization = await this.organizationsService.findAll(
      paginationQuery,
    );
    return res.status(HttpStatus.OK).json(organization);
  }

  @Get(':id')
  public async getOrganization(@Res() Res, @Param('id') id: string) {
    const organization = await this.organizationsService.findOne(id);
    if (!organization) {
      throw new NotFoundException('Organization does not exist!');
    }
    return Res.status(HttpStatus.OK).json(organization);
  }

  @Put('/:id')
  public async updateOrganization(
    @Res() res,
    @Param('id') organizationId: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    try {
      const organization = await this.organizationsService.updateOrganization(
        organizationId,
        updateOrganizationDto,
      );
      if (!organization) {
        throw new NotFoundException('Organization does not exist');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Customer has been successfully updated',
        organization,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Organization not updated!' + res.data,
        status: 400,
      });
    }
  }
}
