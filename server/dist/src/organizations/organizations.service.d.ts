import { Organization } from './interfaces/organization.interface';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsService {
    private organizationModel;
    constructor(organizationModel: Model<Organization>);
    create(createOrganizationDto: CreateOrganizationDto): Promise<void>;
    findAll(): Promise<(Organization & {
        _id: any;
    })[]>;
    findOne(id: number): string;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<Organization & {
        _id: any;
    }>;
    remove(id: number): string;
}
