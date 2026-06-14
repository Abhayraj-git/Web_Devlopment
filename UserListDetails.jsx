import { Link, useParams } from "react-router-dom"

export default function UserDetail()
{
    const paramsData = useParams();

    return (
        <div style={{marginLeft:'15px'}}>
        <h1>User Detail Page</h1>
        <h2>User Id is : {paramsData.id}</h2>
        <h3><Link to="/Users">Back</Link></h3>
        </div>
    )
}