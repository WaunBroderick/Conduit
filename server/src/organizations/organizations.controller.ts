import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrganizationsService } from './organizations.service';

@ApiTags('Organizational')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly OrganizationsService: OrganizationsService) {}

  @Post()
  createOrganization(
    @Body('id') id: string,
    @Body('name') orgName: string,
    @Body('address') orgAddress: string,
    @Body('logo') orgLogo: string,
  ) {
    const generatedId = this.OrganizationsService.createOrganization(
      id,
      orgName,
      orgAddress,
      orgLogo,
    );
    return generatedId;
  }
}
