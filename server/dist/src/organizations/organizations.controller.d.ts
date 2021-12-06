import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: OrganizationsService);
    create(createOrganizationDto: CreateOrganizationDto): Promise<void>;
    findAll(): Promise<(import("./interfaces/organization.interface").Organization & {
        _id: any;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateOrganizationsDto: UpdateOrganizationDto): Promise<import("./interfaces/organization.interface").Organization & {
        _id: any;
    }>;
    remove(id: string): string;
}
