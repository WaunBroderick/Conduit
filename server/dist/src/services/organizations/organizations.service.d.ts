import { Organization } from './interfaces/organization.interface';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { UpdateDepartmentDto } from '../departments/dto/update-department.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
export declare class OrganizationsService {
    private readonly organizationModel;
    constructor(organizationModel: Model<Organization>);
    findAll(paginationQuery: PaginationQueryDto): Promise<Organization[]>;
    create(createOrganizationDto: CreateOrganizationDto): Promise<void>;
    findOne(id: string): Promise<Organization>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<UpdateDepartmentDto>;
    remove(id: string): Promise<any>;
}
