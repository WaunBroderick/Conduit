import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Param,
  Res,
  NotFoundException,
  HttpStatus,
  Put,
  Query,
  Next,
  UsePipes,
  ValidationPipe,
  HttpCode,
  UseFilters,
  HttpException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@ApiTags('Organizational')
@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Post()
  @ApiOperation({ description: 'Create an Organization' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async createOrganization(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ) {
    try {
      const organization = await this.organizationsService.create(
        createOrganizationDto,
      );
      return organization;
    } catch (e) {
      throw e;
    }
  }

  @Get()
  @ApiOperation({ description: 'Get all Organizations' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async getAllOrganizations(
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const organization = await this.organizationsService.findAll(
      paginationQuery,
    );
    return organization;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ description: 'Get one Organization by id' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async getOrganization(@Param('id') id: string) {
    try {
      const organization = await this.organizationsService.findOne(id);
      if (!organization) {
        throw new NotFoundException('Organization does not exist!');
      }
    } catch (err) {
      return err;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @ApiOperation({ description: 'Update an Organization by id' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async updateOrganization(
    @Param('id') organizationId: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    try {
      const organization = await this.organizationsService.updateOrganization(
        organizationId,
        updateOrganizationDto,
      );
      return organization;
      if (!organization) {
        throw new NotFoundException('Organization does not exist');
      }
    } catch (err) {
      throw err;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ description: 'Remove one Organization by id' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async removeOrganization(@Param('id') id: string) {
    try {
      const organization = await this.organizationsService.remove(id);
      return organization;
      if (!organization) {
        throw new NotFoundException('Organization does not exist!');
      }
    } catch (err) {
      return err;
    }
  }
}
