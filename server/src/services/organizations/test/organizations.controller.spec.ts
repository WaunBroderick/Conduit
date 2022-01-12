import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { Organization } from '../organization.model';

import { OrganizationsController } from '../organizations.controller';
import { OrganizationsService } from '../organizations.service';
import { organizationStub } from './stubs/organizations.stub';

import * as mongoose from 'mongoose';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { PaginationQueryDto } from '../dto/pagination-query.dto';

jest.mock('../organizations.service.ts');

describe('OrganizationsController', () => {
  let organizationsController: OrganizationsController;
  let organizationsService: OrganizationsService;
  let organization: Organization;
  let organizations: Organization[];
  let createOrganizationDto: CreateOrganizationDto;
  let updateOrganizationDto: UpdateOrganizationDto;
  let paginationQueryDto: PaginationQueryDto;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: OrganizationsService,
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
      controllers: [OrganizationsController],
      providers: [OrganizationsService],
    }).compile();

    organizationsController = moduleRef.get<OrganizationsController>(
      OrganizationsController,
    );
    organizationsService =
      moduleRef.get<OrganizationsService>(OrganizationsService);
    jest.clearAllMocks();
  });

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
  });

  describe('getAllOrganizations', () => {
    it('should return an array of organizations', async () => {
      paginationQueryDto = {
        limit: 5,
        offset: 5,
      };
      organizations = await organizationsController.getAllOrganizations(
        paginationQueryDto,
      );
      expect(organizationsService.findAll).toHaveBeenCalled();
      expect(organizationsService.findAll).toHaveBeenCalledWith(
        paginationQueryDto,
      );
    });
  });

  describe('createOrganization', () => {
    it('should create an organization', async () => {
      expect(organizationsService.create).toHaveBeenCalled();
      expect(organizationsService.create).toHaveBeenCalledWith(
        createOrganizationDto,
      );
    });
  });

  describe('findOneOrganization', () => {
    it('should find the organization', async () => {
      organization = await organizationsController.getOrganization(
        '123456789012',
      );
      expect(organizationsService.findOne).toHaveBeenCalled();
      expect(organizationsService.findOne).toHaveBeenCalledWith('123456789012');
    });
  });

  describe('updateOrganization', () => {
    it('should update the organization', async () => {
      updateOrganizationDto = {
        name: 'Updated Name',
      };
      organization = await organizationsController.updateOrganization(
        '123456789012',
        updateOrganizationDto,
      );
    });
  });

  describe('removeOrganization', () => {
    it('should remove the organization', async () => {
      organization = await organizationsController.removeOrganization(
        '123456789012',
      );
      expect(organizationsService.remove).toHaveBeenCalled();
      expect(organizationsService.remove).toHaveBeenCalledWith('123456789012');
    });
  });
});
