import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
export declare class OrganizationsController {
    private organizationsService;
    constructor(organizationsService: OrganizationsService);
    create(createOrganizationDto: CreateOrganizationDto): Promise<void>;
    getAllOrganizations(res: any, paginationQuery: PaginationQueryDto): Promise<any>;
    getOrganization(Res: any, id: string): Promise<any>;
    update(res: any, id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<any>;
}
