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
  createOrganizationInput,
  updateOrganizationInput,
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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should create an Organization with createOrganizationInput', async () => {
    const organization = await service.create(createOrganizationInput);
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
    expect(organizations[0].name).toBe(createOrganizationInput.name);
    expect(organizations[0].address).toBe(createOrganizationInput.address);
    expect(organizations[0].country).toBe(createOrganizationInput.country);
    expect(organizations[0].logo).toBe(createOrganizationInput.logo);
  });

  it('Should get the organization by its own organizationId', async () => {
    const organization = await service.findById(organizationId);
    expect(JSON.stringify(organization._id)).toBe(
      JSON.stringify(organizationId),
    );
    expect(organization.name).toBe(createOrganizationInput.name);
    expect(organization.address).toBe(createOrganizationInput.address);
    expect(organization.country).toBe(createOrganizationInput.country);
    expect(organization.logo).toBe(createOrganizationInput.logo);
  });

  it('Should update some Organization Properties', async () => {
    updateOrganizationInput.id = organizationId;
    const updatedOrganization = await service.update(
      updateOrganizationInput.id,
      updateOrganizationInput,
    );
    expect(updatedOrganization.id).toBe(organizationId);
    expect(updatedOrganization.name).toBe(updateOrganizationInput.name);
    expect(updatedOrganization.country).toBe(updateOrganizationInput.country);
    expect(updatedOrganization.address).toBe(updateOrganizationInput.address);
    expect(updatedOrganization.logo).toBe(updateOrganizationInput.logo);
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
    updateOrganizationInput.id = organizationId;
    try {
      await service.update(updateOrganizationInput.id, updateOrganizationInput);
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.response).toBeDefined();
      expect(err.response.statusCode).toBe(404);
    }
  });
});
