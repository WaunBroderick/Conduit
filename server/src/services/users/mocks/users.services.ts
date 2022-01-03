import { userStub } from 'test/stubs/users.stub';

export const UsersService = jest.fn().mockReturnValue({
  getUserById: jest.fn().mockReturnValue(userStub()),
  getUsers: jest.fn().mockReturnValue(userStub()),
});
