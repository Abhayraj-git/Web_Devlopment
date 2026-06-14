import { useActionState } from "react"

export default function NewVAlidation()
{
    const handleLogin = (prevData,data) =>
    {
        let name = data.get("name")
        let pass = data.get("password")

        let regex = /^[A-Za-z0-9]+$/;

        if (!regex.test(pass))
        {
            return {error : 'Password CAn Contain only Number or Alphabet',name,pass}
        }
        else if (name.length>5)
        {
            return {error : 'Name should Contain Maximum of 6 Alphabet or Number',name,pass}
        }
        else
        {
            return {massage : 'Login Done',name,pass}
        }
    }
    const [data,action,pending] = useActionState(handleLogin,null)
    return (
        <>
       <form action={action}>
         <input type="text" name="name" id="" />
        {
            data?.massage && <span>{data?.massage}</span>
        }
        <br /><br />
         <input type="text" name="password" id="" />
          {
            data?.error && <span>{data?.error}</span>
        }
        <br /><br />
         <button disabled={data?.error}>Login</button>
        <br /><br />
       </form>
        </>
    )
}