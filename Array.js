let arr = [1,2,3,4,5,6,7]; //Normal array construction
console.log(arr);
let brr = new Array(1,'Abhay','Raj',34,true);

brr.push('hello');
console.log(brr);
brr.pop();
console.log(brr);
brr.unshift();
console.log(brr);
brr.shift('World');
console.log(brr);
brr.slice(2,3);
console.log(brr);
brr.splice(0,1,'Hey');
console.log(brr);
arr.map((number,index)=>
{
    console.log(number);
})
let arr1 = [20,30,33,44,55,10,24,7];
let even = arr1.filter((number)=>
{
return number%2==0;
});
console.log(even);


let arr2 = [1,2,2,3,3];

let ans = arr2.reduce((acc,curr)=>
{
return acc+curr;
},0);
console.log(ans);


let sort = arr1.sort();
console.log(sort);