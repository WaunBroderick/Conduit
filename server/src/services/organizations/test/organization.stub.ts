import * as Chance from 'chance';
import { CreateOrganizationInput } from '../dto/create-organization.input';
import { UpdateOrganizationInput } from '../dto/update-organization.input';

const ORGANIZATION_TOLE = 'Organization';
const chance = new Chance();
let organizationId = '';

export const MockCreateOrganizationInput: CreateOrganizationInput = {
  id: organizationId,
  name: chance.company(),
  address: chance.address(),
  country: chance.country(),
  logo: chance.animal(),
};

export const MockUpdateOrganizationInput: UpdateOrganizationInput = {
  id: organizationId,
  name: chance.company(),
  address: chance.address(),
  country: chance.country(),
  logo: chance.animal(),
};
