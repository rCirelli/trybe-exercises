const fs = require('fs/promises');
const { join } = require('path');

const filename = join(__dirname, '/users.json');

const readUsersFile = async () => {
  try {
    const users = await fs.readFile(filename, 'utf8');
    return JSON.parse(users);
  } catch (error) {
    console.log('read error: ', error);
    return null;
  }
};

const writeUsersFile = async (userData) => {
  try {
    const users = await readUsersFile();    
    users.push(userData);
    await fs.writeFile(filename, JSON.stringify(users));
  } catch (error) {
    console.log('write error: ', error);
    return null;
  }
};

const checkUserExists = async (token) => {
  const users = await readUsersFile();
  const userExists = users.some((user) => user.token === token);
  return userExists;
}

module.exports = {
  checkUserExists,
  writeUsersFile,
}; 