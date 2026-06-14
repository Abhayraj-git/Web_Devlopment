import { useState } from "react";
import Lift2 from "./LiftUppState2";
import Lift3 from "./LiftuppState3";

function Lift1()
{
    const [user,setUser]=useState('');
    return(
        <>
        <Lift2 setUser ={setUser}/>
         <Lift3 user = {user}/>
         </>
    )
}
export default Lift1;
//we Pass State so that it can lift up in thier parent