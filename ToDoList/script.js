let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// add task
addBtn.addEventListener("click", () => {
  let task = inputTask.value.trim();
  if(task === ""){
    alert("Enter the task!");
    return;
  }
  let taskObject = {
    name:task,
    isDone:false
  };
  tasks.push(taskObject);
  saveToLocalStorage();
  showTask();
  inputTask.value = "";
});
// show task
function showTask(){
  taskList.innerHTML="";
  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    let spanText = document.createElement('span');
    spanText.textContent = task.name;
    if(task.isDone){
      spanText.style.textDecoration='line-through';
      spanText.style.color='#b8b1b1be';
    }
    // complete button
    let completeBtn = document.createElement('button');
    completeBtn.textContent='complete';
    completeBtn.classList.add('completeBtn');
    completeBtn.addEventListener('click', ()=>{
      tasks[index].isDone = !tasks[index].isDone;
      saveToLocalStorage();
      showTask();
    });
    // delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click', ()=>{
      tasks.splice(index, 1);
      saveToLocalStorage();
      showTask();
    });
    li.appendChild(spanText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
// save function
function saveToLocalStorage(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
showTask();