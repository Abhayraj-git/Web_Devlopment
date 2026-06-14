import { useEffect, useState } from "react";
import "./integrate.css"
import { useNavigate } from "react-router-dom";

export default function Integrate()
{
    const [userData,setUserData] = useState([])



    const [loading,setLoading] = useState(false)

    const navigate = useNavigate();

    useEffect(()=>
    {
        getUserData();
    },[])
    const getUserData = async()=>
    {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const url = "http://localhost:3000/user"
        let response = await fetch(url);
        response = await response.json();
        setUserData(response)
         setLoading(false)
    }
    const deleteUser=async(id)=>
    {
        const url = "http://localhost:3000/user";

        let response = await fetch(url +"/"+id,{method:'delete'})
        response  = await response.json();
        if(response)
        {
            alert("record deleted")
            getUserData()
        }
    }
    const EditUser = (id)=>
    {
        navigate("/edit/"+id)
    }
    return (
        <>
        <h1>Integrate JSON server Api </h1>
        <ul className="heading">
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Action</li>
        </ul>
        {
            !loading?
            userData.map((user)=>
            (
                
                <ul className="row" >
                    <li>
                        <h2 key={user.name}>{user.name}</h2>
                    </li>
                    <li>
                        <h4 key={user.age}>{user.age}</h4>
                    </li>
                    <li>
                        <h6 key={user.email}>{user.email}</h6>
                    </li>
                    <li>
                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                    </li>
                    <li>
                        <button onClick={()=>EditUser(user.id)}>Edit</button>
                    </li>
                </ul>
                
            ))
            :<h1>Data Loading ...</h1>
        }
        </>
    )
}



// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "./App.css"
// import User from "./AddingUserList";
// import Integrate from "./IntegrateApi";
// import Edit from "./EditingInApi";

// function App() {
//   return (
//     <BrowserRouter>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/add">Add</NavLink>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/" element={<Integrate />} />
//         <Route path="/add" element={<User />} />
//     <Route path="/edit/:id" element={<Edit />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
