

function AlertMe(event)
{
  alert("You Clicked para Number : " + event.target.textContent);
}

let myDiv = document.getElementById('Hello');

myDiv.addEventListener('click' , AlertMe);