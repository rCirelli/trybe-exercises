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
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    });
    return result;
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
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
