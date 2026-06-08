

let Todo;

if(localStorage.getItem('todos'))
{
    Todo = JSON.parse(localStorage.getItem('todos'));
}
else
{
    Todo = [];
}
 
let TodoContainer = document.querySelector('.task');

let btn = document.querySelector('.Gupta');
btn.addEventListener('click', Addtodo);

function Addtodo()
{
let userInput = document.querySelector('.Abhay');
 
let userdate = document.querySelector('.Raj');

if (userInput.value ==="")
{
    return;
}
let todoItem = userInput.value;
let todoDate = userdate.value;
Todo.push({task: todoItem,date: todoDate});

localStorage.setItem('todos',JSON.stringify(Todo));

display()

}


function display()
{
  TodoContainer.innerHTML = "";
 
    let row = "";

  for (let i =0;i<Todo.length;i++)
  {
    row +=
        `<div>
        <span>${Todo[i].task}</span>
        <span>${Todo[i].date}</span>
        <button class="Deletebtn" onclick="DeleteTodo(${i})">Delete</button>
        </div>`;
  }
  
  TodoContainer.innerHTML = row;
}
function DeleteTodo(index)
{
    Todo.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(Todo));

    display();
}

display();