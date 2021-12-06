import { CreateOrganizationDto } from './create-organization.dto';
declare const UpdateOrganizationDto_base: import("@nestjs/common").Type<Partial<CreateOrganizationDto>>;
export declare class UpdateOrganizationDto extends UpdateOrganizationDto_base {
    _id?: string;
    name?: string;
    address?: string;
    logo?: string;
}
export {};
