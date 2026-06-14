import { use, useState } from "react"

function Multiple()
{
    const [Counter,setCounter] = useState(0);
    return(
        <>
        <h1>{Counter}</h1>
        <button onClick={()=>
            setCounter(Counter + 1)
        }>Click Me</button>
        {
            Counter==0? <h1>Condition 0</h1>: 
            Counter==1? <h1>Condition 1</h1>:
            Counter==2? <h1>Condition 2</h1>:
            Counter==3? <h1>Condition 3</h1>:
            Counter==4? <h1>Condition 4</h1>:
            Counter==5? <h1>Condition 5</h1>:
            Counter==6? <h1>Condition 6</h1>:
            Counter==7? <h1>Condition 7</h1>:
           <h1> Other Condition</h1>
        }
        </>
    )
}
export default Multiple;