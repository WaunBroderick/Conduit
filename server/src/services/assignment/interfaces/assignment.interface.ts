import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/user.model';
import { Organization } from 'src/services/organizations/organization.model';

export interface IAssignment extends Document {
  readonly organizationId: Organization;
  readonly employeeId: User;
}
