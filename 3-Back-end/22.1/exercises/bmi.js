const readline = require('readline-sync');

console.log('BMI Calculator');

const weight = readline.questionFloat('Your weight (Kg): ');
const height = readline.questionFloat('Your height (m): ');

const calcBMI = (w, h) => (w / (h ** 2)).toFixed(2);

const bmiChart = (bmi) => {
  switch (true) {
    case bmi > 40:
      return 'Obesity grade III and IV';
      
    case bmi < 40 && bmi >= 35:
      return 'Obesity grade II';
    
    case bmi < 35 && bmi >= 30:
      return 'Obesity grade I';
    
    case bmi < 30 && bmi >= 25:
      return 'Overweight';
    
    case bmi < 25 && bmi >= 18.5:
      return 'Normal weight';
    
    default:
      return 'Below normal weight';
  }
}

const result = Number(calcBMI(weight, height));

console.log(`

Your BMI is ${result}

${bmiChart(result)}
`);