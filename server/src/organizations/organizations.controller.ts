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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@ApiTags('Organizational')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
    //return this.OrganizationsService.createOrganization();
    // return generatedId;
  }

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
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
  }
}
