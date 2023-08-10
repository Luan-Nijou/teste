// const inputTask = document.querySelector('input[type="text"]')

// const botoes = document.querySelectorAll("button");

// botoes.addEventListener("click", ()=>{
//     const imgLampada = document.querySelector(".conteudo img");

//     if(this.textContent == "LIGAR"){
//         imgLampada.src = "./img/pic_bulbon.gif";
//         this.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "./img/pic_bulboff.gif";
//         this.textContent = "LIGAR";
//     }


// let tasks = []

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

const tasks = [];

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    tasks.push(taskText);
    updateTaskList();
    taskInput.value = "";
  }
});

function updateTaskList() {
  taskList.innerHTML = "";
  
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-button" data-index="${i}">Excluir</button>
    `;
    taskList.appendChild(li);
  }
  
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = parseInt(button.getAttribute("data-index"));
      tasks.splice(index, 1);
      updateTaskList();
    });
  });
}

updateTaskList();
