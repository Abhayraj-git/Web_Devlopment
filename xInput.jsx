import { useState } from "react"

function Input()
{
    const [Val , setVal] = useState("Abhay Raj");
    return(
        <>
        <h1>Enter Your Input here</h1>
        <input type="text" placeholder="Enter Value" value = {Val} onChange={(event)=>setVal(event.target.value)} />
        <h1>{Val}</h1>
        <button onClick={()=> {setVal("");}}>Clear</button>
        </>
    )
}
export default Input;


// import Input from "./xInput"

// function App()
// { 

//   return (
//     <>
//    <Input>

//    </Input>
//     </>
//   )
  
// }
// export default App