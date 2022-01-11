import { Test, TestingModule } from '@nestjs/testing';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { OrganizationsService } from '../organizations.service';
import { organizationStub } from './stubs/organizations.stub';

class ApiOrganizationMock {
  findAll() {
    return [];
  }

  create(dto: any) {
    return [];
  }

  findOne(id: string) {
    return [];
  }

  updateOrganization(id: string, dto: any) {
    return [];
  }

  remove(id: string) {
    return [];
  }
}

describe.only('OrganizationService', () => {
  let organizationService: OrganizationsService;
  let createOrganizationDto: CreateOrganizationDto;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: OrganizationsService,
      useClass: ApiOrganizationMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationsService, ApiServiceProvider],
    }).compile();
    organizationService =
      module.get<OrganizationsService>(OrganizationsService);
  });

  it('should call create organization with expected parms', async () => {
    const createOrganizationSpy = jest.spyOn(organizationService, 'create');
    createOrganizationDto = {
      name: organizationStub().name,
      address: organizationStub().address,
      logo: organizationStub().logo,
      departments: organizationStub().departments,
    };
    organizationService.create(createOrganizationDto);
    expect(createOrganizationSpy).toHaveBeenCalledWith(createOrganizationDto);
  });
});
