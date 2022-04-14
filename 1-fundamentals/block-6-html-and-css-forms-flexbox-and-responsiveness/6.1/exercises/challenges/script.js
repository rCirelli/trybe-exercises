const INPUT_NAME = document.getElementById('input-name');
const NAME_REQ_LENGTH = {min: 10, max: 40};
const INPUT_EMAIL = document.getElementById('input-email');
const EMAIL_REQ_LENGTH = {min: 10, max: 50};
const BTN_SUBMIT = document.getElementById('btn-submit');

function validadeInputsLength() {
  const nameLength = INPUT_NAME.value.length;
  const emailLength = INPUT_EMAIL.value.length;
  const validNameLength = nameLength > NAME_REQ_LENGTH.min && nameLength < NAME_REQ_LENGTH.max;
  const validEmailLength = emailLength > EMAIL_REQ_LENGTH.min && emailLength < EMAIL_REQ_LENGTH.max;
  if (validNameLength && validEmailLength){
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')  
    return;
  }
  alert('Dados inválidos');
}

function preventDefaults(event) {
  event.preventDefault();
  validadeInputsLength();
}

BTN_SUBMIT.addEventListener('click', preventDefaults);
