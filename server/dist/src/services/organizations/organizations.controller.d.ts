import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
export declare class OrganizationsController {
    private organizationsService;
    constructor(organizationsService: OrganizationsService);
    createOrganization(res: any, createOrganizationDto: CreateOrganizationDto): Promise<any>;
    getAllOrganizations(res: any, paginationQuery: PaginationQueryDto): Promise<any>;
    getOrganization(Res: any, id: string): Promise<any>;
    updateOrganization(res: any, organizationId: string, updateOrganizationDto: UpdateOrganizationDto): Promise<any>;
}
