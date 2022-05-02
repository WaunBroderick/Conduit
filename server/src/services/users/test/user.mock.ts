import * as Chance from 'chance';
import { CreateUserInput } from '../dto/create-user.input';

import { createOrganizationInput } from 'src/services/organizations/test/organization.stub';

const chance = new Chance();
let userId = '';
let organizationId = '';

export const createUserInput: CreateUserInput = {
  firstName: chance.first(),
  lastName: chance.last(),
  email: chance.email(),
  password: chance.color(),
  online: true,
  isAdmin: true,
  organization: createOrganizationInput.id,
  assignments: 'sure',
};
