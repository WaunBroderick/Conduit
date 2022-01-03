import { Test } from '@nestjs/testing';
import { AuthCredentialsDto } from './dto/auth-crednetials.dto';
import { User } from './schmeas/user.schema';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userStub } from './test/auth.stub';

jest.mock('./auth.service.ts');

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
    authService = moduleRef.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    describe('when signUp is called', () => {
      let user: User;
      let createUserDto: AuthCredentialsDto;

      beforeEach(async () => {
        createUserDto = {
          email: userStub().email,
          name: userStub().name,
          password: userStub().password,
          organization: userStub().organization,
          online: userStub().online,
        };
        user = await authController.signUp(createUserDto);
      });

      test('Then it should call authService', () => {
        expect(authService.signUp).toHaveBeenCalledWith(
          createUserDto.email,
          createUserDto.name,
          createUserDto.password,
          createUserDto.organization,
          createUserDto.online,
        );
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });
});
