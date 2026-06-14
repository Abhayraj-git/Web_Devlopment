import { useState } from "react"

function RadioBox()
{
    const [gender,setGender]= useState('female');
    const [city,setCity]=useState('delhi');
    return(
        <>
        <h1>Select Your Gender Here</h1>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} value={'male'} name="x" id="male" />
        <label htmlFor="male">Male</label>
        <br /><br />
        <input type="radio" onChange={(event)=>setGender(event.target.value)} value={'female'} name="x" id="female" />
        <label htmlFor="female">female</label>
        <h2>Gender : {gender}</h2>
        <br /><br />
        <select onChange={(even)=>setCity(event.target.value)} defaultValue={'delhi'}>
            <option value="delhi">Delhi</option>
            <option value="gorakhpur">Gorakhpur</option>
            <option value="kushinagar">Kushinagar</option>
            <option value="maharajganj">Maharajganj</option>
        </select>
        <h3>City : {city}</h3>
        </>
    )
}
export default RadioBox;