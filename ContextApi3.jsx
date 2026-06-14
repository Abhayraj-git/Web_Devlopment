import { useContext } from "react";
import SubjectContext from "./SubjectContext";

function Api3()
{
    const val = useContext(SubjectContext);
 return(
    <>
    <div style={{backgroundColor:'yellow'}}>Subject : {val}</div>
    </>
 )
}
export default Api3;