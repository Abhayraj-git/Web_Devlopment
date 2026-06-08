async function getAbhay() 
{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // here we are fetching data from an random api

    let data = await response.json();// by writing await here we make this asyn funtion to a sync funtion

    console.log(data);// Awaitncan only be with asyn funtion it is not possible with syn funtion

    console.log("Abhay");
}



const myHeeaders = new Headers();
myHeeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = 
{
    method: "POST",
    body: JSON.stringify({username: "Abhay Raj Gupta"}),
    headers: myHeeaders,
}

async function postData()
{
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("post data response : ",data);
}
async function processData() 
{
    await postData();
    await getAbhay();
}

processData();