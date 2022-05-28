import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { DepartmentsService } from '../departments.service';
import * as Chance from 'chance';

const express = require('express');
const mongoose = require('mongoose');
const chance = new Chance();

@Injectable()
export class DepartmentsSeed {
  constructor(private readonly departmentsService: DepartmentsService) {}

  // OrganizationIds
  organizationId = mongoose.Types.ObjectId('6269cd8878ce539f1226e436');

  @Command({
    command: 'create:departments',
    describe: 'create a set of departments',
  })
  async create() {
    const departments = [
      'Technology',
      'Operations',
      'Finance',
      'HR',
      'Sales',
      'Marketing',
    ];

    for (const department of departments) {
      const departmentCopy = await this.departmentsService.create({
        _id: new mongoose.Types.ObjectId(),
        name: department,
        organization: mongoose.Types.ObjectId('6269cd8878ce539f1226e436'),
        admins: '',
      });

      console.log(departmentCopy);
    }
  }
}
