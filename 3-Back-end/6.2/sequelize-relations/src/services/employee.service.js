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

module.exports = { getAll, getById };
