import { Document } from 'mongoose';
import { Organization } from 'src/services/organizations/organization.model';

export interface ICourse extends Document {
  readonly organizationId: Organization;
  readonly courseName: String;
  readonly courseType: String;
}
