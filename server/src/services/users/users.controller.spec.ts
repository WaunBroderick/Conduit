import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.model';
import { userStub } from '../../../test/stubs/users.stub';

jest.mock('./mocks/users.services');

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    describe('when getUser is called', () => {
      let user: User;

      beforeEach(async () => {
        user = await controller.getUser(userStub().userId, userStub().userId);
      });

      test('then it should call userService', () => {
        expect(service.findOne).toBeCalledWith(userStub().userId);
      });
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
