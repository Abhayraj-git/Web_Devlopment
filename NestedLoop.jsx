import Collage from "./Nested1";

function Nested ()
{
    const obj = [
        {
            Name : 'Abhay',
            Age : 20,
            Collage : 'IIIT kottayam',
            City : 'Kottaym',
            type : [
                {
                    Handling:'Semi-Goverment',
                    Model : 'PPP',
                }
            ]
        },
        {
            Name : 'Aditya',
            Age : 21,
            Collage : 'IIIT kottayam',
            City : 'Kottaym',
            type : [
                {
                    Handling:'Semi-Goverment',
                    Model : 'PPP',
                }
            ]
        },
        {
            Name : 'Nishant',
            Age : 21,
            Collage : 'IIIT kottayam',
            City : 'Kottaym',
            type : [
                {
                    Handling:'Semi-Goverment',
                    Model : 'PPP',
                }
            ]
        },
        {
            Name : 'Pranjal',
            Age : 20,
            Collage : 'IIIT kottayam',
            City : 'Kottaym',
            type : [
                {
                    Handling:'Semi-Goverment',
                    Model : 'PPP',
                }
            ]
        },
    ]
    return(
        <>
           {
            obj.map((collage,index)=>(
                <div key={index}>
                    <Collage collage={collage}/>
                </div>
            ))
           } 
        </>
    )
}
export default Nested;