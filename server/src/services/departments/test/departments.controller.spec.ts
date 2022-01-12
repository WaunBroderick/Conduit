import { Test, TestingModule } from '@nestjs/testing';
import { CreateOrganizationDto } from 'src/services/organizations/dto/create-organization.dto';
import { Organization } from 'src/services/organizations/organization.model';
import { OrganizationsController } from 'src/services/organizations/organizations.controller';
import { organizationStub } from '../../organizations/test/stubs/organizations.stub';
import { Department } from '../department.model';
import { DepartmentsController } from '../departments.controller';
import { DepartmentsService } from '../departments.service';
import { CreateDepartmentDto } from '../dto/create-department.dto';

describe('DepartmentsController', () => {
  let organizationsController: OrganizationsController;
  let departmentController: DepartmentsController;
  let departmentService: DepartmentsService;
  let createDepartmentDto: CreateDepartmentDto;
  let createOrganizationDto: CreateOrganizationDto;
  let organization: Organization;
  let department: Department;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: DepartmentsService,
      useFactory: () => ({
        findAll: jest.fn(() => []),
        create: jest.fn(() => []),
        findOne: jest.fn(() => {}),
        updateOrganization: jest.fn(() => {}),
        remove: jest.fn(() => {}),
      }),
    };

    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [DepartmentsController],
      providers: [DepartmentsService],
    }).compile();

    departmentController = moduleRef.get<DepartmentsController>(
      DepartmentsController,
    );
    departmentService = moduleRef.get<DepartmentsService>(DepartmentsService);
  });
  jest.clearAllMocks();

  beforeEach(async () => {
    createOrganizationDto = {
      name: organizationStub().name,
      address: organizationStub().address,
      logo: organizationStub().logo,
      departments: organizationStub().departments,
    };
    organization = await organizationsController.createOrganization(
      createOrganizationDto,
    );

    createDepartmentDto = {
      name: 'Technology',
      organization: JSON.stringify(organization._id),
      subSection: 'I',
    };
  });

  describe('createDepartment', () => {
    it('should create a department', async () => {
      expect(departmentService.create).toHaveBeenCalled();
      expect(departmentService.create).toHaveBeenCalledWith(
        createDepartmentDto,
      );
    });
  });
});
