import * as Chance from 'chance';
import { CreateAssignmentInput } from '../dto/create-assignment.input';

//Mocks
import { MockCreateOrganizationInput } from '../../organizations/test/organization.stub';
import { MockCreateCourseInput } from 'src/services/courses/test/courses.stub';
import { MockCreateUserInput } from 'src/services/users/test/user.mock';

const ASSIGNMENT_TOLE = 'Organization';
const chance = new Chance();
let assignmentId = '';

export const MockCreateAssignmentInput: CreateAssignmentInput = {
  id: assignmentId,
  name: chance.company(),
  completion: 20,
  organization: JSON.stringify(MockCreateOrganizationInput.id),
  course: MockCreateCourseInput.id,
  user: MockCreateUserInput.id,
};
