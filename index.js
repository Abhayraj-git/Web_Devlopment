let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent= "Hello My Name is Abhay";

mydiv.insertAdjacentElement('afterbegin',newElement);