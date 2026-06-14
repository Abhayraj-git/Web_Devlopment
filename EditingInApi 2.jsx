import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Edit()
{
    const {id} = useParams();

        const [name,setName] = useState('')
        const [age,setAge] = useState('')
        const [email,setEmail] = useState('')

    useEffect(()=>
    {

    },[])

    const GetUser = async()=>
    {
        const url = "http://localhost:3000/user/"+id;
        let response = await fetch(url);
        response = await response.json();

        setName(response.name)
        setEmail(response.email)
        setAge(response.age)

    }

    return (
        <>
        <h1>Edit User Details </h1>
        <input type="text"  name="" value={name} id="" placeholder="User Name"/>
        <br /><br />
        <input type="text" value={age} name="" id="" placeholder="User Age"/>
        <br /><br />
        <input type="text" name="" value={email} id="" placeholder="User Email"/>
        <br /><br />
        <button>Update Details</button>
        </>
    )
}