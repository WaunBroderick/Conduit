import { userStub } from 'test/stubs/users.stub';

export const UserService = jest.fn().mockReturnValue({
  SignUp: jest.fn().mockResolvedValue(userStub()),
});
