import { useEffect, useState } from "react";

export default function Api()
{
     const [UesrData,setUserData] = useState([]);

     useEffect(()=>
    {
      load();
    },[])

    async function load() {
        const url = "https://dummyjson.com/users";
        let resoponse = await fetch(url);
        resoponse = await resoponse.json()

        setUserData(resoponse.users)
    }
    return(
        <>
        <h1>Fetch data from Api</h1>
        {
            UesrData.map((users)=>
            (
               <ul>
                <li>
                    {users.firstName}
                </li>
                <li>
                    {users.lastName}
                </li>
                <li>
                    {users.age}
                </li>
               </ul>
            ))
        }
        </>
    )
}