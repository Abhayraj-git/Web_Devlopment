import { useRef } from "react";

function Uncontrolled()
{
    const User = useRef(null);
    const Pass = useRef(null);
    
    const HandleForm = (event)=>
    {
        event.preventDefault();
        const User = document.querySelector('#Abhay').value;
        const password = document.querySelector('#Raj').value;
        console.log(User);
        console.log(password);
        
        
    }

    const HandleFormRef =(event)=> 
    {
        event.preventDefault()
        console.log(User.current.value);
        console.log(Pass.current.value);
        
    }
    
    return(
        <>
            <form action="" method="post" onSubmit={HandleForm}>
                <input type="text" name="" id="Abhay" placeholder="Enter Your Name" />
                <br />
                <input type="password" name="" id="Raj" placeholder="Enter password"/>
                <br />
                <button>
                    submit
                </button>
            </form>
            <br />
            <hr />
            <br />
            <form action="" method="post">
                <input type="text" ref={User} name="" id="AbhayR" placeholder="Enter Your Name" />
                <br />
                <input type="password" ref={Pass} name="" id="RajR" placeholder="Enter password"/>
                <br />
                <button onClick={HandleFormRef}>
                    submit
                </button>
            </form>
        </>
    )
}
export default Uncontrolled;