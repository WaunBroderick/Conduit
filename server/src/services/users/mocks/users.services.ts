import { userStub } from 'src/services/auth/test/auth.stub';

export const UsersService = jest.fn().mockReturnValue({
  getUserById: jest.fn().mockReturnValue(userStub()),
  getUsers: jest.fn().mockReturnValue(userStub()),
});
