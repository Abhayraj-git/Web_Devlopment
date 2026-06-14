import { useId } from "react"

function USEID()
{
    const User = useId();
    return(
        <>
        <h1 id={User}>Hello</h1>
         <h1 id={User}>Hello</h1>
         <h1 id={User}>Hello</h1>
         <h1 id={User}>Hello</h1>
         <h1 id={User}>Hello</h1>
        </>
    )
}
export default USEID;
// Useid() give uniqueid every time they try dont use in key 
// <div> not use much use <fragment> or <>