const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf8');
    return JSON.parse(contentFile);
  } catch (e) {
    return null;
  }
}

const writeCacaoTrybeFile = async (content) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (e) {
    return null;
  }
}

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
}

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.length;
}

const getChocolatesByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolates = cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.name.includes(name));
  return chocolates;
}

const updateChocolateById = async (id, { name, brandId }) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const targetChocolate = cacaoTrybe.chocolates
    .find((chocolate) => chocolate.id === Number(id));
  if (targetChocolate === undefined) {
    return { message: 'chocolate not found' }
  }
  
  let updatedChocolate;
  const updatedChocolates = cacaoTrybe.chocolates
    .map((chocolate) => {
      if(chocolate.id === Number(id)) {
        updatedChocolate = {
          id: chocolate.id,
          name,
          brandId,
        }
        return updatedChocolate;
      }
      return chocolate;
    });
  cacaoTrybe.chocolates = updatedChocolates;
  writeCacaoTrybeFile(cacaoTrybe);
  return { chocolate: updatedChocolate };
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
  getChocolatesByName,
  updateChocolateById,
};
