import { OrganizationsService } from './organizations.service';
export declare class OrganizationsController {
    private readonly OrganizationsService;
    constructor(OrganizationsService: OrganizationsService);
    createOrganization(id: string, orgName: string, orgAddress: string, orgLogo: string): Promise<any>;
}
