import { useActionState } from "react"

function UseAction()
{
    async function Handle(previousData,FormData)
    {
        let Name = FormData.get('name');
        let pass = FormData.get('pass');

        await new Promise(res=>setTimeout(res,3000))

        if (Name && pass)
        {
            return {
                message: 'Data Submited Sucesffully',
                Name,
                pass
            }
        }
        else
        {
            return{error : 'Failed to Submit. Enter Proper Data'}
        }
    }
    const [data,action,pending]=useActionState(Handle,undefined)
    return(
        <>
        <h1>Action hook</h1>
        <form action={action}>
        <input type="text" name="name" id="" placeholder="Enter Your Name " />
        <br /><br />
        <input type="password" name="pass" id="" placeholder="Enter Your Password " /><br />
        <button type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
        
        </form>
        {
            data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }
        {
            data?.message && <span style={{color:'green'}}>{data?.message}</span>
        }
        <br /><br />
        <h4>Name : {data?.Name}</h4>
        <h4>Pass : {data?.pass}</h4>
        </>
    )
}
export default UseAction;
 //useState       → Store local state
// useEffect      → Run side effects
// useTransition  → Low-priority updates
// useActionState → Handle form actions and their results
