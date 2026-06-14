import { useEffect } from "react";

function Use2({counter,data})
{
    function callonce()
    {
        console.log('called once');
    }
    function HandalData()
    {
        console.log('data called');
    }


    useEffect(()=>{
        callonce()
    },[counter]);

    useEffect(()=>{
        HandalData()
    },[]);
    
    return(
        <>
        <h3>Counter : {counter}</h3>
        <h3>Data : {data}</h3>
        </>
    )
}
export default Use2;