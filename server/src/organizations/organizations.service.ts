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

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel('Organization') private organizationModel: Model<Organization>,
  ) {}

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
  // const result = newOrganization.save(function (err, newOrganization) {});
  // return newOrganization._id;

  findAll() {
    return this.organizationModel.find().exec();
    // return `This action returns all departments`;
  }

  findOne(id: number) {
    // return this.organizationModel.find( id ).exec();
    return `This action returns a #${id} department`;
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const Organization = await this.organizationModel
      .findByIdAndUpdate(id, updateOrganizationDto)
      .setOptions({ new: true })
      .populate('name')
      .populate('address')
      .populate('logo');

    if (!Organization) {
      throw new NotFoundException();
    }
    console.log(Organization);
    await Organization.save();
    return Organization;
    // return`This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
