import { BrowserRouter, Route, Routes } from "react-router-dom";
import Integrate from "./IntegrateApi";
import { useState } from "react";

export default function User() {

    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')

    const createUser = async()=>
    {
        const url = "http://localhost:3000/user";
        let response = await fetch(url,{
            method : 'Post',
            body:JSON.stringify({name,email,age})
        });
        response = await response.json();
        if(response)
        {
            alert("New User Added")
        }
    }

  return (
    <>
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Age"
       
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email"
       
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={createUser}>
        Add User
      </button>
    </>
  );
}

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// import User from "./AddingUserList";
// import Integrate from "./IntegrateApi";

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
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
