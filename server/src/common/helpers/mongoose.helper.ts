import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoServerClosedError } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { async } from 'rxjs';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      const mongod = await MongoMemoryServer.create();
      const mongoUri = mongod.getUri();
      return {
        uri: mongoUri,
        ...options,
      };
    },
  });

export const closeInMongodConnection = async () => {
  if (mongod) await mongod.stop();
};
