import { Suspense, use } from "react";

const fetchData = ()=>fetch('https://dummyjson.com/users').then((response)=>response.json());

const userResource = fetchData();

export default function UseApii() 
{
    return (
        <>
        <h1>Use Api in React Js</h1>
       <Suspense fallback={<p>Loading...</p>}><User userResource={userResource}/></Suspense>
        </>
    )
}

const User = ({ userResource }) =>
{
    const userData = use(userResource);
    return(
       <div>
        <h1>User List</h1>
        {
            userData?.users?.map((item)=>
            (
                <h1 key={item.id}>{item.firstName}</h1>
            ))
        }
       </div>
    )
}