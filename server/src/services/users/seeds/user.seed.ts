import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UsersService } from '../users.service';
import * as Chance from 'chance';
import { ObjectId } from 'mongodb';

const express = require('express');
const mongoose = require('mongoose');
const chance = new Chance();

@Injectable()
export class UserSeed {
  constructor(private readonly userService: UsersService) {}

  // OrganizationIds
  organizationId = mongoose.Types.ObjectId('6269cd8878ce539f1226e436');

  @Command({
    command: 'create:user',
    describe: 'create a set of users',
  })
  async create() {
    for (let i = 0; i < 50; i += 1) {
      const user = await this.userService.create({
        _id: new mongoose.Types.ObjectId(),
        firstName: chance.first(),
        lastName: chance.last(),
        email: chance.email(),
        password: chance.character(),
        isAdmin: false,
        online: false,
        organization: this.organizationId,
        assignments: this.organizationId,
      });
      console.log(user);
    }
  }
}
