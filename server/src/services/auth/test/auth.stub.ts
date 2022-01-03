import { User } from '../schmeas/user.schema';

export const userStub = (): User => {
  return {
    name: 'Jeffrey Bezos',
    email: 'test33@example.com',
    password: 'pasword',
    organization: 'amazon',
    online: true,
  };
};
