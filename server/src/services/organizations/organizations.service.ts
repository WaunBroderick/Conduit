import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Organization } from './interfaces/organization.interface';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { UpdateDepartmentDto } from '../departments/dto/update-department.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { Department } from 'src/services/departments/interfaces/department.interface';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel('Organization')
    private readonly organizationModel: Model<Organization>,
  ) {}

  public async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<Organization[]> {
    const { limit, offset } = paginationQuery;

    return await this.organizationModel.find().skip(offset).limit(limit).exec();
  }

  async create(createOrganizationDto: CreateOrganizationDto): Promise<void> {
    const { name, address, logo, departments } = createOrganizationDto;
    const Organization = new this.organizationModel({
      name,
      address,
      logo,
      departments,
    });

    try {
      await Organization.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Organization already exists');
      }
      throw error;
    }
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

  async update(
    id: string,
    updateOrganizationDto: UpdateOrganizationDto,
  ): Promise<UpdateDepartmentDto> {
    const existingOrganization = await this.organizationModel.findByIdAndUpdate(
      { _id: id },
      updateOrganizationDto,
    );

    if (!existingOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return null;
  }

  async remove(id: string): Promise<any> {
    const deletedOrganization = await this.organizationModel.findByIdAndRemove(
      id,
    );
    return deletedOrganization;
  }
}
