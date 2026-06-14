import { useState } from "react";

function Abhay()
{
    const [data,setData] = useState([
        'Abhay','Aditya','Nishant','Pranjal'
    ])

    const [extra,setExtra] = useState([
        {
            Name :'Abhay',
            Age : 20
        },
        {
            Name :'Aditya',
            Age : 18
        },
        {
            Name :'Nishant',
            Age : 21
        },
        {
            Name :'pranjal',
            Age : 21
        }
    ])

    const ChangeArr=(Val)=>
    {
        data[data.length-1]=Val;
        setData([...data])
    }
    const ChangeArrObj=(Val1)=>
    {
        extra[extra.length-1].Age=Val1;
        setExtra([...extra])
    }
    return (
        <>
        <input type="text" name="" id="" placeholder="Enter Your Name" onChange={(event)=>ChangeArr(event.target.value)}/>

        {
            data.map((item,index)=>(
                <h3 key={index}>{item}</h3>
            ))
        }
        <hr />
        <br />
        <input type="text" name="" id=""  placeholder="Enter Your Age" onChange={(event)=>ChangeArrObj(event.target.value)}/>
        {
            extra.map((item,index)=>(
                <h3 key={index}>{item.Name},{item.Age}</h3>
            ))
        }
        </>
    )
}
export default Abhay;
//()=>{} → multiple lines of code, use return if needed.
// ()=>() → automatically returns the expression inside () or when you have only one statement to return