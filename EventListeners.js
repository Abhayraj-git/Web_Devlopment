
function changetext(event)
{
    console.log(event);
let fpara = document.getElementById('fpara');
fpara.textContent = "Hello Abhay"
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click',changetext);

let newElement = document.getElementById('Abhay');

newElement.addEventListener('click',function(event)
{
    console.log(event);
  event.preventDefault();
  newElement.textContent = "Hello World"
});