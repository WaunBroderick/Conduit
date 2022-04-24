import { User } from '../../user.model';
import * as mongoose from 'mongoose';
import { ObjectUnsubscribedError } from 'rxjs';

export const UserStub = (): User => {
  return {
    userId: '123',
    name: 'Jeff Bezos',
    email: 'jeffybezos@amazon.com',
    password: 'password',
    organization: new mongoose.Types.ObjectId('61d0b0114c2996028cdfdf6b'),
    departments: [],
    isAdmin: true,
    userRoles: [new mongoose.Types.ObjectId('61d0b0114c2996028cdfdf6b')],
    online: true,
  };
};
