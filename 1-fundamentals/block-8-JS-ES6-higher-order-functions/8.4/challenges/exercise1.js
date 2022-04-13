// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, curr) => {
    // acc.push(curr);
    curr.reduce((acc2, curr2) => {
      acc.push(curr2);
      return acc;
    }, 0);
    return acc;
  }, []);  
}

console.log(flatten(arrays));