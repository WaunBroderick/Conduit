import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentsService } from '../assignments.service';

import * as Chance from 'chance';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from 'src/common/helpers/mongoose.helper';
import { MongooseModule } from '@nestjs/mongoose';
import { Assignment, AssignmentSchema } from '../assignments.schema';
import mongoose from 'mongoose';

import { MockCreateAssignmentInput } from './assignment.stub';

const ASSIGNEMENT_ROLE = 'Assignment';
const chance = new Chance();
let assignmentId = '';

describe('AssignmentsService', () => {
  let service: AssignmentsService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: Assignment.name,
            schema: AssignmentSchema,
          },
        ]),
      ],
      providers: [AssignmentsService],
    }).compile();

    service = module.get<AssignmentsService>(AssignmentsService);
  });

  afterAll(async () => {
    await module.close();
    await mongoose.connection.close();
    await closeInMongodConnection();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should create an Assignment with createAssignmentInput', async () => {
    const assignment = await service.createAssignment(
      MockCreateAssignmentInput,
    );
    console.log(assignment);
    expect(assignment.id).toBeDefined();
    expect(assignment.name).toBeDefined();
    expect(assignment.organization).toBe('JEFFREY');
    expect(assignment.organization).toBeDefined();
    expect(assignment.course).toBeDefined();
    expect(assignment.user).toBeDefined();

    assignmentId = assignment.id;
  });
});

describe('Logger', () => {
  test.todo('Some test to be written in the future');
});
