import { useRef } from "react";

function Refrence()
{
    const inputRef = useRef(null);

    const inputHadle=()=>
    {
        inputRef.current.focus();
        inputRef.current.style.color='red'
        input.current.placeholder='Enter Password'
    }
    return (
        <>
            <input ref={inputRef} type="text" placeholder="Enter Your Name"/>
            <button onClick={inputHadle}>focus</button>
        </>
    )
}
export default Refrence;