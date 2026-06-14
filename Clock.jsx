import { useEffect, useState } from "react"

function Clock()
{
    const [color,setColor]=useState('red');
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(()=>
        {
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return (
        <div style={{backgroundColor:"blue",
            width:"90px",border:"2px solid",
            color:color,
        }}>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value="red">red</option>
                 <option value="blue">blue</option>
                  <option value="green">green</option>
                   <option value="yellow">yellow</option>
            </select>
           <h2>{time}</h2>

        </div>
    )
}
export default Clock;