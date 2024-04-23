let tasks = []

//Функция для ввода в инпут
function addTask() {
  const input = document.getElementById("taskInput")
  const taskInput= input.value.trim()

  if(taskInput !== ''){
    tasks.push(taskInput)
    input.value = ''
    displayTask()
  } else {
    alert("Your input place empty,Please right your record")
    return
  }
}
//Функция для отображения элементов
function displayTask() {
  const taskInput = document.getElementById("taskList")//получаем новый эллемент
  taskInput.innerHTML= ''// очищаем эллемет после добавления
  //Метод для перебора всех элементов в списке
  tasks.forEach((task,index)=> {
     const newList = document.createElement("li")
     newList.textContent = task
     //создается новая кнопка
     const removeBtn = document.createElement("button")
     removeBtn.textContent = "Remove"
     removeBtn.style.backgroundColor = "red"
     removeBtn.onclick = ()=> deleteIndex(index)
     //через метод append добовляем к родитель какой либо эллемент
     newList.appendChild(removeBtn)
     taskInput.appendChild(newList)
  })
}
//Функция для удаления эллементов
function  deleteIndex(index) {
   tasks.splice(index,1)
   displayTask()
}
