const mongoose = require('mongoose');
const Department = require('../services/departments/schemas/departments.schema');

mongoose
  .connect('mongodb://localhost:27017/conduit-STAGING')
  .then(() => {
    console.log('MONGO CONNETCION OPEN!!');
  })
  .catch((err) => {
    console.log(err);
  });

const seedDepartments = [
  {
    name: 'DEPARTMENT NAME',
    organization: '61ac2c65dbccc6e0226de8db',
  },
];

const seedDB = async () => {
  await Department.deleteMany({});
  await Department.insertMany(seedDepartments);
};

seedDB().then(() => {
  mongoose.connection.close();
});
