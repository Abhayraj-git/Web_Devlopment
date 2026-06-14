function Lift2({setUser})
{
    return(
        <>
        <input type="text" name="" id="" placeholder="Enter Your User Name" onChange={(event)=>setUser(event.target.value)}/>
        <button>Add User</button>
        </>
    )
}
export default Lift2;