import { User } from 'src/services/users/user.model';
import * as mongoose from 'mongoose';

export const userStub = (): User => {
  return {
    userId: '123',
    name: 'Jeff Bezos',
    email: 'jeffybezos@amazon.com',
    password: 'password',
    organization: new mongoose.Types.ObjectId('61d0b0114c2996028cdfdf6b'),
    departments: [],
    online: true,
  };
};
