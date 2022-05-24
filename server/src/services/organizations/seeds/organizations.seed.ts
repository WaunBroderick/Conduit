import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { OrganizationsService } from '../organizations.service';
import * as Chance from 'chance';

const express = require('express');
const mongoose = require('mongoose');
const chance = new Chance();

@Injectable()
export class OrganizationSeed {
  constructor(private readonly organizationService: OrganizationsService) {}

  // OrganizationIds
  organizationId = mongoose.Types.ObjectId('6269cd8878ce539f1226e436');

  @Command({
    command: 'create:organization',
    describe: 'creates a set of organizations',
  })
  async create() {
    const organization = await this.organizationService.create({
      _id: mongoose.Types.ObjectId('6269cd8878ce539f1226e436'),
      name: 'Gyroscopic Inc.',
      address: '51 McDonnel St, Peterborough ON',
      logo: 'C://Desktop/here.png',
      country: 'CA',
    });
    console.log(organization);
  }
}
