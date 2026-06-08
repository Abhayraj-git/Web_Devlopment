
// let FirstPromise = new Promise((resolve,reject)=>
// {
//     setTimeout(function hello()
//     {
//         console.log("My Name Is Abhay Raj Gupta")
//     } , 15000);
//     resolve(200);
// })

// let promise1 = new Promise ((resolve,reject)=>
// {
// let success = false;
// if(success)
// {
//     resolve("Promise Fulfilled")
// }
// else
// {
//     reject("Promise Rejected")
// }
// });

// promise1.then((massage)=>
// {
// console.log("Then ka Massage is  "+ massage)
// }).catch((error)=>
// {
// console.log(" Error :   "+ error)
// });


let promise2 = new Promise((resolve,reject)=>
{
  setTimeout(resolve,1000,"first");
})

let promise3 = new Promise((resolve,reject)=>
{
  setTimeout(resolve,2000,"second");
})

let promise4 = new Promise((resolve,reject)=>
{
  setTimeout(resolve,4000,"third");
})

Promise.all([promise2,promise3,promise4]).then((values)=>
{
    console.log(values)
}).catch((error)=>
{
    console.error("error" + error);
})