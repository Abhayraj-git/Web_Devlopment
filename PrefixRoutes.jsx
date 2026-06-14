import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Prefix()
{
    return(
        <>
        <BrowserRouter>
        <Link to="/in/user/login">user</Link>
         <Link to="/in/user/About">About</Link>
          <Link to="/in/user/Contact">Contact</Link>

        <Routes path="/in">
        <Route path = "/in/user">
            <Route path="/in/user/login" element={<h1>User Is Abhay</h1>}/>
            <Route path="/in/user/About" element={<h1> Abhay is Student</h1>}/>
            <Route path="/in/user/Contact" element={<h1> Abhay Contact is abhay@gmail.com</h1>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}