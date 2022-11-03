const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listDays = document.querySelector("#days")
  for(let i of decemberDaysList){
    daysList = document.createElement('li')
    daysList.innerText = i
    daysList.classList.add('days')
    listDays.appendChild(daysList)
    if(i == 24 || i == 25 || i == 31){
      daysList.classList.add('holiday')
    }
    if(i == 4 || i == 11 || i == 18 || i == 25){
      daysList.classList.add ("friday")
    }
}

let createButton = (string) =>{
  let buttonDiv = document.querySelector('.buttons-container')
  let button = document.createElement('button')
  button.innerText = string
  button.id = "btn-holiday"
  buttonDiv.appendChild(button)
}
createButton('Feriados')





let clickButton = () =>{
  const button = document.querySelector('#btn-holiday')
  button.addEventListener('click', bgHoliday)
}

let bgHoliday = (event) =>{
  const holiday = document.querySelectorAll('.holiday')
  for(i=0;i<holiday.length;i++){
    if(holiday[i].style.background == 'green'){
      holiday[i].style.background = 'rgb(238,238,238)'
    }else{
      holiday[i].style.background = 'green'
    }
  }
}
clickButton()





let createButtonFriday = (string) =>{
  let buttonDiv = document.querySelector('.buttons-container')
  let button = document.createElement('button')
  button.innerText = string
  button.id = "btn-friday"
  buttonDiv.appendChild(button)
}
createButtonFriday('Sexta-Feira')




document.querySelector('#btn-friday').addEventListener('click', function(){
  let sextou = document.querySelectorAll('.friday')
  let arr = [4,11,18,25]
  for(i=0;i<sextou.length;i++){
    if(sextou[i].innerText == "sextou"){
      sextou[i].innerText = arr[i]
    }else{
      sextou[i].innerText = "sextou"
    }
  }
})


const bunchLi = document.querySelector('#days')
bunchLi.addEventListener('mouseover', function(event){
  event.target.style.fontSize = '24px';
});

bunchLi.addEventListener('mouseout', function(event){
  event.target.style.fontSize = '20px';
});

createTask = () =>{
  const tasks = document.querySelector('.my-tasks')
  let cook = document.createElement('span')
  cook.innerText = "Cozinhar"
  tasks.appendChild(cook)
}
createTask()

const newTaskDiv = (color) => {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}
newTaskDiv('green')

const setTaskClass = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass()


const setTaskDay = () =>{
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  days.addEventListener('click', (event) => {

    let eventTargetColor = event.target.style.color;

    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}
setTaskDay()