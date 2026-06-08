let t1  = performance.now();

for (let i = 1 ;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent = "This is Para : " + i;
    document.body.appendChild(para);
}

let t2  = performance.now();

console.log("performance time for first is : " + (t2-t1));

let t3  = performance.now();


let myDiv = document.createElement('div');

for (let i = 1 ;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent = "This is Para : " + i;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

let t4  = performance.now();

console.log("performance time for second is : " + (t4-t3));

let t5  = performance.now();

let fragment = document.createDocumentFragment(); // this most good way to make many fragment as it take very less amount of time 

for (let i = 1 ;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent = "This is Para : " + i;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);

let t6  = performance.now();

console.log("performance time for third is : " + (t6-t5));