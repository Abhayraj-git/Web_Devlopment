import { Link } from "react-router-dom"

export default function UsersList()
{
    const UesrData = [
        {id : 1,Name:'Abhay'},
        {id : 2,Name:'Nishant'},
        {id : 3,Name:'Pranjal'},
        {id : 4,Name:'Aditya'},
        {id : 5,Name:'kislay'},
        {id : 6,Name:'Prabhakar'}
    ]
    return (
        <div style={{marginLeft:'15px'}}>
        <h1>User List Page</h1>
        {
            UesrData.map((item)=>(
                <div key={item.id}>
                    <h4>{<Link to={"/Users/"+item.id}>{item.Name}</Link>}</h4>
                </div>
            ))
        }
        </div>
    )
}