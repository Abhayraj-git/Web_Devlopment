let obj = 
{
    name : "Abhay",
    Weight : 77,
    height : 183
};

obj.colour = "red"; // we can add any thing in runtime in our object 

console.log(obj);


let dest = {...obj}; // spread oreator is used to clone object it dosent make refrence copy it make new object

console.log(dest);

let dest1 = Object.assign({},obj); // assign opreator is also work same as spread opreator 

console.log(dest1);