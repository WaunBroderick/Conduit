import { userStub } from '../test/auth.stub';

export const UserService = jest.fn().mockReturnValue({
  SignUp: jest.fn().mockResolvedValue(userStub()),
});
