import { Controller, Post, Get, Body } from '@nestjs/common';

import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {

    constructor(private readonly OrganizationsService: OrganizationsService) {}

    @Post()
    createOrganization(
        @Body('name') orgName: string,
        @Body('address') orgAddress: string,
        @Body('logo') orgLogo: string,
        ){
        const generatedId = this.OrganizationsService.createOrganization(
            orgName, 
            orgAddress,
            orgLogo,
            );
        return {id: generatedId};
    }
}
