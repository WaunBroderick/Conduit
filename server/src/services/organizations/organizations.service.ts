import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { Organization, OrganizationDocument } from './organizations.schema';
import { Model } from 'mongoose';

import * as Chance from 'chance';
const chance = new Chance();

@Injectable()
export class OrganizationsService {
  organizations: Partial<Organization>[];
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  async create(organization: CreateOrganizationInput) {
    return this.organizationModel.create(organization);
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationModel.find().lean();
  }

  async findById(id) {
    return this.organizationModel.findById(id).lean();
  }

  async update(
    id: string,
    updateOrganizationInput: UpdateOrganizationInput,
  ): Promise<Organization> {
    return await this.organizationModel.findByIdAndUpdate(
      id,
      updateOrganizationInput,
      { new: true },
    );
  }

  async remove(id: string): Promise<Organization> {
    return await this.organizationModel.findByIdAndRemove(id);
  }
}
