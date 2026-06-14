import { useState } from "react"

function Controlled()
{
    const [name , setName]=useState('');
    const [pass , setPass]=useState('');
    const [email , setEmail]=useState('');
    return (
        <>
<input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your Name"/>
<ul></ul><br />
<input type="password" value={pass} onChange={(event)=>setPass(event.target.value)} placeholder="Enter password"/>
<ul></ul><br />
<input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your Email"/>
<ul></ul><br />

<button onClick={()=>(setName(''),setPass(''),setEmail(''))}>clear</button>

<ul></ul><br />

<h3>{name}</h3>
<h3>{pass}</h3>
<h3>{email}</h3>
        </>
    )
}

export default Controlled;