import { Organization } from './organization.model';
import { IOrganization } from './interfaces/organization.interface';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
export declare class OrganizationsService {
    private readonly organizationModel;
    constructor(organizationModel: Model<Organization>);
    findAll(paginationQuery: PaginationQueryDto): Promise<Organization[]>;
    create(createOrganizationDto: CreateOrganizationDto): Promise<IOrganization>;
    findOne(id: string): Promise<Organization>;
    updateOrganization(organizationId: string, updateOrganizationDto: UpdateOrganizationDto): Promise<IOrganization>;
    remove(id: string): Promise<any>;
}
