const returnFn = (fn) => {
  console.log(fn);
  return fn;
}

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('if callback from uppercase() returns uppercase string', () => {
  const expected = 'TESTE';
  const result = uppercase('teste', returnFn);
  console.log(result);    
  
  expect(result).toEqual(expected);  

});
