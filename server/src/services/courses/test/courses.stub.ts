import * as Chance from 'chance';
import { CreateCourseInput } from '../dto/create-course.input';

//Mocks
import { MockCreateOrganizationInput } from '../../organizations/test/organization.stub';

const COURSE_ROLE = 'Organization';
const chance = new Chance();
let courseId = '';

export const MockCreateCourseInput: CreateCourseInput = {
  id: courseId,
  name: chance.company(),
};
