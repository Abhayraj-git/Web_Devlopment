import { useState } from "react"
function Toggle()
{

    const [Display,setDisplay] = useState(true)
    return(
        <>
        <h1>Hide And Show</h1>
        <button onClick={()=>setDisplay(false)}>Toggle</button>
        {Display? <h1>Abhay Raj Gupta</h1> : null}
        </>
       
    )
}
export default Toggle;