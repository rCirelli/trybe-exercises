const fs = require('fs').promises;
// const simpsonsData = require('./simpsons.json');

// const displayInfo = () => simpsonsData.map(({id, name}) => console.log(`${id} - ${name}`));

async function displayInfo(filePath) {
  let info;
  try {
    const json = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(json);
    info = data;
    data.map(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (e) {
    console.error(`Error reading file: ${e.message}`);
  }
  return info;
}

async function fetchInfo(filePath) {
  const promise = new Promise(async (resolve, reject) => {
    let info;
    try {
      const json = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(json);
      info = data;
    } catch (e) {
      reject(new Error('Failed to fetch data from file'));
    }
    resolve(info);
  });

  return promise;
}

async function fetchInfoFromId(id) {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fetchInfo('./simpsons.json');
    const idExists = data.some((info) => Number(info.id) === id);

    if (idExists) {
      const result = data.find((info) => Number(info.id) === id);
      resolve(result);
    }

    reject(new Error('The provided ID does not exist'));
  });

  return promise;
}

async function removeInfoFromId(...id) {
  const data = await fetchInfo('./simpsons.json');
  const idExists = data.some((info) => id.includes(Number(info.id)));

  try {
    if (!idExists) { throw new Error('The provided ID does not exist') }

    let result = data;
    id.forEach((argId) => {
      result = result.filter((info) => Number(info.id) !== argId);
    });

    await fs.writeFile('./simpsons.json', JSON.stringify(result));
    console.log('File written successfully!');
  } catch (err) {
    console.error(`Error writing to file: ${err.message}`);
  }
}

async function createNewFileFromIdRange(idStart, idEnd, filePathName) {
  const data = await fetchInfo('./simpsons.json');
  const idExists = data.some((info) => Number(info.id) >= idStart && Number(info.id) <= idEnd);

  try {
    if (!idExists) { throw new Error('The provided IDs does not exist') }

    const result = data.filter((info) => Number(info.id) >= idStart && Number(info.id) <= idEnd);

    await fs.writeFile(filePathName, JSON.stringify(result));
    console.log('File created successfully!');
  } catch (err) {
    console.error(`Error creating file: ${err.message}`);
  }
}

async function addEntryToFileFromId(charId, destinationFilePath) {
  const originData = await fetchInfo('./simpsons.json');
  const destinationData = await fetchInfo(destinationFilePath);
  const idExists = originData.some((info) => Number(info.id) === charId);

  try {
    if (!idExists) { throw new Error('The provided IDs does not exist') }

    const targetData = originData.find((info) => Number(info.id) === charId);
    destinationData.push(targetData);

    await fs.writeFile(destinationFilePath, JSON.stringify(destinationData));
    console.log('File written successfully!');
  } catch (err) {
    console.error(`Error writing to file: ${err.message}`);
  }
}

async function editEntryToFileFromId(sourceCharId, targetCharId, destinationFilePath) {
  const originData = await fetchInfo('./simpsons.json');
  const destinationData = await fetchInfo(destinationFilePath);
  const sourceIdExists = originData.some((info) => Number(info.id) === sourceCharId);
  const targetIdExists = destinationData.some((info) => Number(info.id) === targetCharId);

  try {
    if (!sourceIdExists && !targetIdExists) { throw new Error('The provided IDs does not exist') }

    const sourceData = originData.find((info) => Number(info.id) === sourceCharId);
    
    const newData = destinationData.map((char) => Number(char.id) === targetCharId ? sourceData : char);
    await fs.writeFile(destinationFilePath, JSON.stringify(newData));
    console.log('File written successfully!');
  } catch (err) {
    console.error(`Error writing to file: ${err.message}`);
  }
}

const main = async () => {
  const exercise6_1 = await displayInfo('./simpsons.json');
  const exercise6_2 = await fetchInfoFromId(1).then((info) => console.log(info));
  const exercise6_3 = await removeInfoFromId(10, 6)
  const exercise6_4 = await createNewFileFromIdRange(1, 4, './simpsonsFamily.json');
  const exercise6_5 = await addEntryToFileFromId(8, './simpsonsFamily.json');
  const exercise6_6 = await editEntryToFileFromId(5, 8, './simpsonsFamily.json');
};
main();
