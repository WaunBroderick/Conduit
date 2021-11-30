import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Organization } from './organization.model';
import { Model } from 'mongoose';
import { SocketAddress } from 'net';

@Injectable()
export class OrganizationsService {
  private organizations: Organization[] = [];

  constructor(
    @InjectModel('Organization')
    private readonly OrganizationModel: Model<Organization>,
  ) {}

  async createOrganization(
    id: string,
    name: string,
    address: string,
    logo: string,
  ) {
    const newOrganization = new this.OrganizationModel({
      id: id,
      name: name,
      address: address,
      logo: logo,
    });
    const result = newOrganization.save(function (err, newOrganization) {});
    return newOrganization._id;
  }
}
