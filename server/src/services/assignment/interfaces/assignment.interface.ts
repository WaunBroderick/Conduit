import { Document } from 'mongoose';
import { User } from '../../users/user.model';
import { Organization } from 'src/services/organizations/organization.model';

export interface IAssignment extends Document {
  readonly organizationId: Organization;
  readonly employeeId: User;
  readonly courseId: string;
  readonly dueDate: Date;
}
