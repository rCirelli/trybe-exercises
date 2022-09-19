const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: {
      model: Address, as: 'addresses', //esse alias DEVE ser igual ao alias definido no model
      attributes: {
        exclude: ['employeeId', 'id']
      },
    },
    attributes: {
      exclude: ['id']
    },
  });

  return users;
};

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const employee = await Employee.create({ firstName, lastName, age });

  await Address.create({ city, street, number, employeeId: employee.id });
  return employee;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
    });
  return employee;kk 
}

// const getById = async (id) => {
//   const employee = await Employee.findOne({
//       where: { id },
//       include: [{
//         model: Address, as: 'addresses',
//         attributes: { exclude: ['number'] },
//       }],
//     });
//   return employee;
// }

module.exports = { getAll, getById, insert };
