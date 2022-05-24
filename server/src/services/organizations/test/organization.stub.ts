import * as Chance from 'chance';
import { CreateOrganizationInput } from '../dto/create-organization.input';
import { UpdateOrganizationInput } from '../dto/update-organization.input';

const mongoose = require('mongoose');

const ORGANIZATION_TOLE = 'Organization';
const chance = new Chance();
let organizationId = mongoose.Types.ObjectId('6269cd8878ce539f1226e436');

export const MockCreateOrganizationInput: CreateOrganizationInput = {
  _id: organizationId,
  name: chance.company(),
  address: chance.address(),
  country: chance.country(),
  logo: chance.animal(),
};

export const MockUpdateOrganizationInput: UpdateOrganizationInput = {
  _id: organizationId,
  name: chance.company(),
  address: chance.address(),
  country: chance.country(),
  logo: chance.animal(),
};
