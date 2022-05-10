import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import { OrganizationsService } from '../organizations.service';
import { Organization, OrganizationSchema } from '../organizations.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../../common/helpers/mongoose.helper';
import * as Chance from 'chance';

import {
  MockCreateOrganizationInput,
  MockUpdateOrganizationInput,
} from './organization.stub';
import mongoose from 'mongoose';

const ORGANIZATION_ROLE = 'Organization';
const chance = new Chance();
let organizationId = '';

describe('OrganizationsService', () => {
  let service: OrganizationsService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: Organization.name,
            schema: OrganizationSchema,
          },
        ]),
      ],
      providers: [OrganizationsService],
    }).compile();

    service = module.get<OrganizationsService>(OrganizationsService);
  });

  afterAll(async () => {
    await module.close();
    await mongoose.connection.close();
    await closeInMongodConnection();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should create an Organization with MockCreateOrganizationInput', async () => {
    const organization = await service.create(MockCreateOrganizationInput);
    expect(organization.id).toBeDefined();
    expect(organization.id).toBeDefined();
    expect(organization.name).toBeDefined();
    expect(organization.logo).toBeDefined();
    expect(organization.country).toBeDefined();
    organizationId = organization.id;
    console.log(organizationId);
  });

  it('Should get a list of all organizations', async () => {
    const organizations = await service.findAll();
    expect(organizations).toBeDefined();
    expect(Array.isArray(organizations)).toBe(true);
    expect(organizations.length).toBe(1);
    expect(organizations[0].name).toBe(MockCreateOrganizationInput.name);
    expect(organizations[0].address).toBe(MockCreateOrganizationInput.address);
    expect(organizations[0].country).toBe(MockCreateOrganizationInput.country);
    expect(organizations[0].logo).toBe(MockCreateOrganizationInput.logo);
  });

  it('Should get the organization by its own organizationId', async () => {
    const organization = await service.findById(organizationId);
    expect(JSON.stringify(organization._id)).toBe(
      JSON.stringify(organizationId),
    );
    expect(organization.name).toBe(MockCreateOrganizationInput.name);
    expect(organization.address).toBe(MockCreateOrganizationInput.address);
    expect(organization.country).toBe(MockCreateOrganizationInput.country);
    expect(organization.logo).toBe(MockCreateOrganizationInput.logo);
  });

  it('Should update some Organization Properties', async () => {
    MockUpdateOrganizationInput.id = organizationId;
    const updatedOrganization = await service.update(
      MockUpdateOrganizationInput.id,
      MockUpdateOrganizationInput,
    );
    expect(updatedOrganization.id).toBe(organizationId);
    expect(updatedOrganization.name).toBe(MockUpdateOrganizationInput.name);
    expect(updatedOrganization.country).toBe(
      MockUpdateOrganizationInput.country,
    );
    expect(updatedOrganization.address).toBe(
      MockUpdateOrganizationInput.address,
    );
    expect(updatedOrganization.logo).toBe(MockUpdateOrganizationInput.logo);
  });

  it('Should delete the mock testing organization', async () => {
    const deletedOrganization = await service.remove(organizationId);
    expect(deletedOrganization).toBeDefined();
  });

  it('Should recieve NotFound error for getting the deleted organization', async () => {
    try {
      await service.findById(organizationId);
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.response).toBeDefined();
      expect(err.response.statusCode).toBe(404);
    }
  });

  it('should not be able to update an non existing organization', async () => {
    MockUpdateOrganizationInput.id = organizationId;
    try {
      await service.update(
        MockUpdateOrganizationInput.id,
        MockUpdateOrganizationInput,
      );
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.response).toBeDefined();
      expect(err.response.statusCode).toBe(404);
    }
  });
});
