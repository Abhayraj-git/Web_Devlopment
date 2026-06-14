import { useState } from "react"

function Radio()
{
    const [skills,setSkills] = useState([]);
    const handleSkills = (event)=>{(event.target.value,event.target.checked)

        if (event.target.checked)
        {
            setSkills([...skills,event.target.value])
        }
        else
        {
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <>
        <h1>
            Enter your input here 
        </h1>
        <input type="checkbox" value="php" onChange={handleSkills} id="php" name="php"/>
        <label htmlFor="php" name="php">php</label>
        <br /><br />
        <input type="checkbox" value="java" onChange={handleSkills} id="java" name="java"/>
        <label htmlFor="java" name="java">java</label>
        <br /><br />
        <input type="checkbox" value="c++" onChange={handleSkills} id="c++" name="c++"/>
        <label htmlFor="c++" name="c++">c++</label>
        <br /><br />
        <input type="checkbox" value="react" onChange={handleSkills} id="react" name="react"/>
        <label htmlFor="react" name="react">react</label>
        <br /><br />
        <h3>{skills.toString()}</h3>
        </>
    )
}
export default Radio;
