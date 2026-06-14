import { useState } from "react";

function App4() 
{
    const [Counters,setCounters] = useState(0);
    const [rCounters,setRcounters] = useState(10);


    return (
        <>
        <h1>Counters : {Counters}</h1>
        <button onClick={()=>setCounters(Counters + 1)}>Update Counters</button>
        <h1>rCounters : {rCounters}</h1>
        <button onClick={()=>setRcounters(rCounters - 1)}>Update rCounters</button>
        </>
    )
}

export default App4;