import { useState } from "react"

function Update()
{
    const [data,setData]=useState({
        Name : 'Abhay',
        Adress : {
            city:'Gorakhpur',
            State : 'Uttar Pradesh',
            Country : 'India'
        }
    })
      const change = (val) =>
      {
        setData({...data,Name : val});
      }
      const changeAdd = (val1) =>
      {
        data.Adress.city = val1;
        setData({...data,Adress:{...data.Adress,city : val1}});
      }
    return(
        <>
        <input type="text" name="" id="" placeholder="Enter Your Name" onChange={(event)=>change(event.target.value)}/>
         <input type="text" name="" id="" placeholder="Enter Your Adreess" onChange={(event)=>changeAdd(event.target.value)}/>
         <h3>Name : {data.Name}</h3>
         <h3>Name : {data.Adress.city}</h3>
        </>
    )
}
export default Update;