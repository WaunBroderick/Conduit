/* mySeedScript.js */
// run with: sudo npx run seed.js
// require the necessary libraries

require('dotenv').config({
  path: __dirname + `/./../../.env.${process.env.NODE_ENV}`,
});

const Chance = require('chance');
const express = require('express');
const mongoose = require('mongoose');

console.log(
  `mongodb://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_DB_ADDRESS}/${process.env.MONGO_ATLAS_DB}`,
);

const seedUsers = async () => {
  // Connection URL
  const client = await mongoose.connect(
    'mongodb://localhost:27017/conduit-STAGING',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  const DepartmentArray = [
    'Human Resources',
    'Technology',
    'Sales',
    'Marketing',
    'Finance',
    'Operations',
    'Research',
  ];

  const OnlineOptions = [true, false];

  // Database Name
  const db = client.db('Conduit');

  // Collection Name
  const usersCollection = db.collection('users');

  // OrganizationIds
  const organizationId = mongoose.Types.ObjectId('6269cd8878ce539f1226e436');

  // Create Users Seed
  let users = [
    {
      firstName: 'Waun',
      lastName: 'Broderick',
      email: 'waunbroderick@gmailll.com',
      organization: organizationId,
      online: false,
      password: '$2a$10$oYVVKBUec46Ww5Rl3Vl/G.y4SiNd76YLH8wRmxkasMvddDdxDTOcS',
    },
  ];
  for (let i = 0; i < 50; i += 1) {
    const name = faker.name.firstName() + ' ' + faker.name.lastName();
    let newUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(name),
      organization: organizationId,
      password: 'password123',
      online: false,
      departments: [
        DepartmentArray[Math.floor(Math.random() * DepartmentArray.length)],
      ],
      online: OnlineOptions[Math.floor(Math.random() * OnlineOptions.length)],
    };
    users.push(newUser);

    // visual feedback always feels nice!
    console.log(newUser.email);
  }

  const usersWipe = await usersCollection.deleteMany({});
  const usersInsert = await usersCollection.insertMany(users);

  client.close();
};

const seedDepartments = async () => {
  // Connection URL
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_DB_ADDRESS}/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  // Database Name
  const db = client.db('Conduit');

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
seedDepartments();
