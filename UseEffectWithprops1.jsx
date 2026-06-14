import { use, useState } from "react"
import Use2 from "./UseEffectWithprops2";

function Use()
{
    const [counter,setCounter] = useState(0);

    const [data,setdata] = useState(0);


    return(
        <>
          <Use2 counter={counter} data={data} /> 
          <button onClick={()=>setCounter(counter + 1)}>Count</button> 
          <button onClick={()=>setdata(data + 1)}>Data</button> 
        </>
    )
}
export default Use;