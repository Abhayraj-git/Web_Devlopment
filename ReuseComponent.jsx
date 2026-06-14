import Reuse2 from "./ReuseComponent2";
function Reuse()
{
    const obj = [
        {
            Name : 'Abhay',
            Age : 20,
            Email : 'Abhay@gmail.com',
            Id : 1
        },
         {
            Name : 'Aditya',
            Age : 19,
            Email : 'Aditya@gmail.com',
            Id : 2
        }, {
            Name : 'Nishant',
            Age : 21,
            Email : 'Nishant@gmail.com',
            Id : 3
        }, {
            Name : 'Pranjal',
            Age : 21,
            Email : 'Pranjal@gmail.com',
            Id : 4
        }
    ]
    return(
        <>
        <>
        {
            obj.map((item)=>(
                <div key={item.Id}>
                    <Reuse2 data = {item} />
                </div>
            ))
        }
        </>
        </>
    )
}
export default Reuse;