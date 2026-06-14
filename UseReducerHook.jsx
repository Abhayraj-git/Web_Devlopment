import { useReducer } from "react"

export default function Reducer()
{
    const emptyData = [
        {
            name : '',
            pass : '',
            email : ''
        }
    ]

    const reducer = (data,action) =>
    {
        return {...data,[action.type]:action.val}
    }

    const [state,dispatch] = useReducer(reducer,emptyData)
    return (
        <>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})}  name="" id="" />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'pass'})}  name="" id="" />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})}  name="" id="" />
        <br /><br />
        <button>Add Details</button>

        <ul>
            <li>Name : {state.name}</li>
            <li>Name : {state.pass}</li>
            <li>Name : {state.email}</li>
        </ul>
        </>
    )
}