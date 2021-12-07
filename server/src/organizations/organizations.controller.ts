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
import { Pagination } from '@elastic/eui';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@ApiTags('Organizational')
@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
    //return this.OrganizationsService.createOrganization();
    // return generatedId;
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
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    try {
      const organization = await this.organizationsService.update(
        id,
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
        message: 'Error: Organization not updated!',
        status: 400,
      });
    }
  }

  /*@Patch(':id')
  public a sync update(
    @Param('id') id: string,
    @Body() updateOrganizationsDto: UpdateOrganizationDto,
  ) {
    return this.organizationsService.update(id, updateOrganizationsDto);
  }

  @Delete('/:id')
  public async remove(@Res() Res, @Param('id') id: string) {
    if (!id) {
      throw new NotFoundException('Organization ID does not exist');
    }

    const organization = await this.organizationsService.remove(id);

    if (!organization) {
      throw new NotFoundException('Organization does not exist');
    }

    return Res.status(HttpStatus.OK).json({
      message: 'Organization has been deleted',
      organization,
    });

    // return this.organizationsService.remove(+id);
  }*/
}
