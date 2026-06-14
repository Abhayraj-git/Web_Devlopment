import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
function Router ()
{
    return(
        <>
        <BrowserRouter>
        <Link to="/Abhay">Home</Link>
        <Link to="/Raj">About</Link>
        <Link to="/Gupta">Contact</Link>
        <Routes>
            <Route path="/Abhay" element={<h1>Abhay</h1>}/>
            <Route path="/Raj" element={<h1>Raj</h1>}/>
            <Route path="/Gupta" element={<h1>Gupta</h1>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router;