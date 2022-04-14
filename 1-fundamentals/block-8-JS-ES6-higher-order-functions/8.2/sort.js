// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);

console.log(sortByAge(people));

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

const sortByAgeReverse = (arr) => arr.sort((a, b) => b.age - a.age);

console.log(sortByAgeReverse(people));
