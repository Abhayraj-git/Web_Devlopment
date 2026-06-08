function outerfuntion()
{
    let name = "Abhay";

    function innerfuntion()
    {
        console.log(name);
    }

    return innerfuntion;
}

let inner = outerfuntion(); // here we get a funtion so we need to store it in a variable which is an a funtion here outer funtion variable name is deestroyed but it is now mapped with innerfuntion call (like it is shared by refrence not its copy)

inner();