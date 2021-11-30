import { Organization } from './organization.model';
import { Model } from 'mongoose';
export declare class OrganizationsService {
    private readonly OrganizationModel;
    private organizations;
    constructor(OrganizationModel: Model<Organization>);
    createOrganization(id: string, name: string, address: string, logo: string): Promise<any>;
}
