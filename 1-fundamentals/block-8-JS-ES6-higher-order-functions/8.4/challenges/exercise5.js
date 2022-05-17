const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const aArray = () => names.reduce((acc, curr) => {
    curr.toLowerCase().split('').reduce((acc2, curr2) => {
      if(curr2 === 'a') acc.push(curr2);
      return acc;
    }, '');
    return acc;
  }, []);
  return aArray().length;
}

console.log(containsA());

const string = 'Amanda';
const acc = [];

const count = string.toLowerCase().split('').reduce((acc2, curr2) => {
  if(curr2 === 'a') acc.push(curr2);
  // return acc;
}, '');

// console.log(acc);