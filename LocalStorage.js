localStorage.setItem('Name','Abhay Raj Gupta');
console.log(localStorage.getItem('Name'));

let obj = {
    name : 'Abhay',
    class : 'B-Tech',
    roll : '295',
};

localStorage.setItem('Obj',JSON.stringify(obj));

console.log(localStorage.getItem('Obj'));

localStorage.removeItem('Name');

localStorage.clear();