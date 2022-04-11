const checkAnswers = (rightAnswers, studentAnswers) => {
  let count = 0;
  for (let i = 0; i < studentAnswers.length; i += 1) {
    if (studentAnswers[i] !== 'N.A') {
      studentAnswers[i] === rightAnswers[i] ? count += 1 : count -= 0.5;
      console.log(`${parseInt(i) + 1}º if: ${count}`);
    }
    else console.log(`${parseInt(i) + 1}º if: N.A`);
  }
  return count;
};

const giveGrade = (rightAnswers, studentAnswers, callback) => `Acertou ${callback(rightAnswers, studentAnswers)} respostas.`;

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(giveGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
