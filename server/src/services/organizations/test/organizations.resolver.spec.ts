import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from 'src/services/users/users.service';
import { OrganizationsResolver } from '../organizations.resolver';
import { OrganizationsService } from '../organizations.service';
import { CreateOrganizationInput } from '../dto/create-organization.input';

import * as Chance from 'chance';
import mongoose from 'mongoose';
import { AuthService } from '../../auth/auth.service';
import { createUserInput } from 'src/services/users/test/user.mock';

const ORGANIZATION_TOLE = 'Organization';
const chance = new Chance();
let organizationId = '';

const createOrganizationInput: CreateOrganizationInput = {
  id: organizationId,
  name: chance.company(),
  address: chance.address(),
  country: chance.country(),
  logo: chance.animal(),
};

const mOrganizationId = new mongoose.Types.ObjectId();

describe('Logger', () => {
  test.todo('Some test to be written in the future');
});
