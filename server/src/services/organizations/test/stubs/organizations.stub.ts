import { Organization } from 'src/services/organizations/organization.model';
import * as mongoose from 'mongoose';
import { ObjectUnsubscribedError } from 'rxjs';

export const organizationStub = (): Organization => {
  return {
    _id: new mongoose.Types.ObjectId('123456789012'),
    name: 'Waun Consulting23',
    address: '51 McDonnel St, Peterborough Ontario',
    logo: 'aws/WaunConsulting/assets/logo/logo.png',
    departments: 'test',
  };
};
