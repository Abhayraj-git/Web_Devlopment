import { startTransition, useState, useTransition } from "react"

function Transition()
{
    const [pending,setTransition] = useTransition();
    const [massage,setMassage] = useState('');
    const handle = () =>{
        startTransition(()=>{setMassage('Processing...');
        });

        setTimeout(()=>{
            setMassage('Completed')
        },3000);
    }
    return (
        <>
        <h1>Transition</h1>
        {
            pending?
            <img style={{width:'100px',height:'150px'}} src="https://imgs.search.brave.com/W5StCR4m9XNF7aiMR4lMbgIoidFETRnuYD-zcP-6skM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhiamR4Y0RSbWNq/RnBZMmx2YWpkNE1t/SnNPWE5uT0hGNU5q/VTJkbTl4ZW1ONmFu/VmxlWEoyZHlabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vMTdtTkNjS1Ux/bUpscmJYb2RvL2dp/cGh5LmdpZg.gif" alt="" />:null
        }
        <button disabled={pending} onClick={handle}>Submit</button>

        <h2>{massage}</h2>
        </>
    )
}
export default Transition;