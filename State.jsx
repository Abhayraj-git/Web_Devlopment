import { useState } from "react";

function App3 () {

    const [fruit,setFruit]=useState("Apple"); // here we need to use the state because if we vhange name it cant re render automatically And if we use state then it will change even if we call funtion becuase Sate have inbuilt re render capacity 

    const NewFruit=()=>
    {
        setFruit("Banana")
    }
return(
    <>
    <h1>Click Below to Chnage the Fruit Name</h1>

    <h1>{fruit}</h1>

    <button onClick={NewFruit}>Click Me</button>
    </>
)
}

export default App3;