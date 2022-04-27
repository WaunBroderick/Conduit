import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { Organization, OrganizationDocument } from './organizations.schema';
import { Model } from 'mongoose';

@Injectable()
export class OrganizationsService {
  organizations: Partial<Organization>[];
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  create(organization: CreateOrganizationInput) {
    return this.organizationModel.create(organization);
  }

  findAll() {
    return this.organizations;
  }

  async findOne(id: number) {
    return this.organizationModel.findById(id).lean();
  }

  update(id: number, updateOrganizationInput: UpdateOrganizationInput) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
