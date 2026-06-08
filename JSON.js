let obj = {
    name : 'Abhay',
    class : 'B-Tech',
    roll : '295',
};
console.log(typeof(obj));

console.log(obj);

let str = JSON.stringify(obj);

console.log(typeof(str));

console.log(str);

console.log(JSON.parse(str));