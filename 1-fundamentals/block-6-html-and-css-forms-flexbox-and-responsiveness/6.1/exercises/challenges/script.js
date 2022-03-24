const BTN_SUBMIT = document.getElementById('btn-submit');

function preventDefaults(event) {
  event.preventDefault();
}

BTN_SUBMIT.addEventListener('click', preventDefaults);
