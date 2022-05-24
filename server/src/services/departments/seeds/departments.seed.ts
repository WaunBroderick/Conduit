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
    // Create Users Seed
    let departmentsList = [
      'Technology',
      'Human Resources',
      'Sales',
      'Finance',
      'Operations',
      'Research',
    ];

    departmentsList.forEach((element) => {
      const department = this.departmentsService.create({
        _id: new mongoose.Types.ObjectId(),
        name: 'Technology',
        organization: mongoose.Types.ObjectId('6269cd8878ce539f1226e436'),
        admins: '',
      });
      console.log(department);
    });
  }
}
