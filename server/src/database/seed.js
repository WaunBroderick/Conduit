/* mySeedScript.js */
// require the necessary libraries
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const seedUsers = async () => {
  // Connection URL
  const client = await MongoClient.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Database Name
  const db = client.db('conduit-STAGING');

  // Collection Name
  const usersCollection = db.collection('users');

  // OrganizationIds
  const organizationId = mongoose.Types.ObjectId('61ac2c65dbccc6e0226de8db');

  // Create Users Seed
  let users = [
    {
      name: 'Waun Broderick',
      email: 'waunbroderick@gmail.com',
      organization: organizationId,
      password: '$2a$10$oYVVKBUec46Ww5Rl3Vl/G.y4SiNd76YLH8wRmxkasMvddDdxDTOcS',
    },
  ];
  for (let i = 0; i < 5000; i += 1) {
    const name = faker.name.firstName() + ' ' + faker.name.lastName();
    let newUser = {
      name,
      email: faker.internet.email(name),
      organization: organizationId,
      password: 'password123',
    };
    users.push(newUser);

    // visual feedback always feels nice!
    console.log(newUser.email);
  }

  const usersWipe = await usersCollection.deleteMany({});
  const usersInsert = await usersCollection.insertMany(users);
  console.log(items);
  client.close();
};

const seedDepartments = async () => {
  // Connection URL
  const client = await MongoClient.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Database Name
  const db = client.db('conduit-STAGING');

  // Collection Name
  const departmentsCollection = db.collection('departments');

  // Create ObjectId
  const organizationId = mongoose.Types.ObjectId('61ac2c65dbccc6e0226de8db');

  // Create Users Seed
  let departments = [
    {
      name: 'Technology',
      organization: organizationId,
    },
    {
      name: 'Human Resources',
      organization: organizationId,
    },
    {
      name: 'Sales',
      organization: organizationId,
    },
    {
      name: 'Marketing',
      organization: organizationId,
    },
    {
      name: 'Finance',
      organization: organizationId,
    },
    {
      name: 'Operations',
      organization: organizationId,
    },
    {
      name: 'Research',
      organization: organizationId,
    },
  ];

  const departmentsWipe = await departmentsCollection.deleteMany({});
  const departmentsInsert = await departmentsCollection.insertMany(departments);
  console.log(departments);
  client.close();
};

seedUsers();
//seedDepartments();
