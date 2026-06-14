import { useState } from "react"

const useToggle=(defaultValue)=>
{
    const[value,setValue]=useState(defaultValue);
    function toggleValue(val)
    {
        if (typeof val !== 'boolean')
        {
            setValue(!value);
        }
        else
        {
            setValue(val);
        }
    }
    return [ value , toggleValue];
}
export default useToggle;


// import useToggle from "./useCustomHooks";


// function App() 
// {
//   const [value,toggleValue]=useToggle(true);
//     return(
//         <>
//            <button onClick={toggleValue}>Toggle</button>
//            <button onClick={()=>toggleValue(false)}>Hide</button>
//            <button onClick={()=>toggleValue(true)} >Show</button>

//           {
//             value?<h2>My Name Is Abhay Raj Gupta</h2>:null
//           }
//         </>
//     )

//   }
// export default App;