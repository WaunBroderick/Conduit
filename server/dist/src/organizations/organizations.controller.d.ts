import { OrganizationsService } from './organizations.service';
export declare class OrganizationsController {
    private readonly OrganizationsService;
    constructor(OrganizationsService: OrganizationsService);
    createOrganization(orgName: string, orgAddress: string, orgLogo: string): {
        id: Promise<void>;
    };
}
