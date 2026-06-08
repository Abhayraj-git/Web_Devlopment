for (let i = 1;i<=10;i++) //for lopp use for itreation
{
console.log("Abhay");
}

for (let i = 1;i<=10;i++)
{
    if (i==5)
    {
        break;  // it genrally break the loop
    }
    else
    {
        console.log("Abhay");
    }
}
for (let i = 1;i<=10;i++)
{
    if (i==5)
    {
        continue; // it genrally skip the loop
    }
    else
    {
        console.log("Abhay");
    }
}

let i =0;
while(i<=5) // while loop
{
    console.log("Hello");
    i++;
}


do // do while it work om first itretion after that it will check the condition
{
console.log("World");
i++
}while(i<8)


    let arr = [10,20,30];
    arr.forEach((value,index)=>
    {
        console.log("Nmber: ",value," Index :",index);
    })