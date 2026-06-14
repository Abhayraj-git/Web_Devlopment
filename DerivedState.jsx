import { useState } from "react"

function Derived()
{
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState('');
    function Handle(){
        setUsers([...users,user])
    }
    const Total = users.length;
    const Last = users[users.length-1];
    const Unique = [...new Set(users)].length;
    return(
        <>
           <h3>Total : {Total}</h3>
           <h3>Last Person : {Last}</h3>
           <h3>Unique : {Unique}</h3>
             <br />
             <br />
           <input type="text" name="" id="" placeholder="Enter User Name" onChange={(event)=>setUser(event.target.value)}/>
           <button onClick={Handle}>Add User</button>
        </>
    )
}
export default Derived;
// when we add user it will re render the react and we get our const updated and so we dont net useState to do thet we can do with const