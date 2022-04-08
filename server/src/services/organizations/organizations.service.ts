import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Organization } from './organization.model';
import { IOrganization } from './interfaces/organization.interface';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
  ) {}

  public async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<Organization[]> {
    const { limit, offset } = paginationQuery;

    return await this.organizationModel.find().skip(offset).limit(limit).exec();
  }

  public async create(
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<IOrganization> {
    const newOrganization = await new this.organizationModel(
      createOrganizationDto,
    );
    return newOrganization.save();
  }

  public async findOne(id: string): Promise<Organization> {
    const organization = await this.organizationModel
      .findById({ _id: id })
      .exec();

    if (!organization) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return organization;
  }

  public async updateOrganization(
    organizationId: string,
    updateOrganizationDto: UpdateOrganizationDto,
  ): Promise<IOrganization> {
    const existingOrganization = await this.organizationModel.findByIdAndUpdate(
      organizationId,
      updateOrganizationDto,
    );

    if (!existingOrganization) {
      throw new NotFoundException(`Organization #${organizationId} not found`);
    }
    return existingOrganization;
  }

  async remove(id: string): Promise<any> {
    const deletedOrganization = await this.organizationModel.findByIdAndRemove(
      id,
    );
    return deletedOrganization;
  }
}
