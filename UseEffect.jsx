import { useEffect, useState } from "react"

function Hooks()
{
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
     callOnce();
    },[]) // if the array is Empty it only runs one time if there is any state is passed in that array then it will run whenever the state will change if it will empty then it will run every time when the funtion is render 

    function callOnce()
    {
        console.log('Called');
    }
    
return (
    <>
    <button onClick={()=>
        setCounter(counter +1)
    }>Counter {counter}</button>
    </>
)
}
export default Hooks;