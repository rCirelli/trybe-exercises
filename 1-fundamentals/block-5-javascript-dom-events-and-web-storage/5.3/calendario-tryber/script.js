function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

const daysContainerList = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = (day) => day === 24 || day === 25 || day === 31;
const isFriday = (day) => day === 4 || day === 11 || day === 18 || day === 25;

function createDays() {
  dezDaysList.forEach(day => {
    const newDay = document.createElement('li');
    newDay.innerHTML = day;
    newDay.classList.add('day');
    if (dezHolidays(day)) newDay.classList.add('holiday');
    if (isFriday(day)) newDay.classList.add('friday');
    daysContainerList.appendChild(newDay);
  });
}

createDays();

daysContainerList.addEventListener('mouseover', (event) => {
  const target = event.target;
  if (target.classList.contains('day')) {
    target.style.transform = 'scale(1.5)';
  }
});

daysContainerList.addEventListener('mouseout', (event) => {
  const target = event.target;
  if (target.classList.contains('day')) {
    target.style.transform = 'scale(1)';
  }
});

const buttonContainer = document.querySelector('.buttons-container');
function createBtn(name, container, ...classes) {
  const newBtn = document.createElement('button');
  newBtn.innerText = name;
  newBtn.classList.add(classes.join(','));
  container.appendChild(newBtn);
}

createBtn('Feriados', buttonContainer, 'btn-holiday');
createBtn('Sexta-feira', buttonContainer, 'btn-friday');

const holidayBtn = document.querySelector('.btn-holiday');
holidayBtn.addEventListener('click', () => {
  const holidayItems = document.querySelectorAll('.holiday');
  holidayItems.forEach(item => {
    item.style.backgroundColor === 'lightgrey'
    ? item.style.backgroundColor = 'rgb(238,238,238)'
    : item.style.backgroundColor = 'lightgrey';
  });
});

const fridayBtn = document.querySelector('.btn-friday');
fridayBtn.addEventListener('click', () => {
  const fridayItems = document.querySelectorAll('.friday');
  fridayItems.forEach(item => {
    if (item.innerText === 'SEXTOU!!!') {
      item.innerText = item.id;
      item.style.color = 'rgb(102, 102, 102)';
    } else {
      item.id = item.innerText;
      item.innerText = 'SEXTOU!!!';
      item.style.color = 'red';
    }
  });
});

const taskContainer = document.querySelector('.my-tasks');
function addTask(task) {
  const newTask = document.createElement('span');
  newTask.innerText = task;  
  taskContainer.appendChild(newTask);
  taskInput.value = '';
  addLabel();
}

function addLabel(color = 'darkgreen') {
  const newLabel = document.createElement('div');
  newLabel.style.backgroundColor = color;
  newLabel.classList.add('task');
  taskContainer.appendChild(newLabel);
}

taskContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('task')) {
    target.classList.contains('selected')
    ? target.classList.remove('selected')
    : target.classList.add('selected');
  }
});

daysContainerList.addEventListener('click', (event) => {
  const target = event.target;
  const selectedTask = document.querySelector('.selected');
  if (target.classList.contains('day')) {
    target.style.color === selectedTask.style.backgroundColor
    ? target.style.color = 'rgb(119, 119, 119)'
    : target.style.color = selectedTask.style.backgroundColor;
  }
});

const taskInput = document.getElementById('task-input');
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', () => {
  addTask(taskInput.value);
});

const taskList = document.querySelector('.task-list');
function addAppointment(text) {
  const newAppointment = document.createElement('div');
  newAppointment.innerText = text;
  taskInput.value = '';
  taskList.appendChild(newAppointment);
}

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addAppointment(taskInput.value);
  }
});

window.onload = () => {
  createDaysOfTheWeek();
}