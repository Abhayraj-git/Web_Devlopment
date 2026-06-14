function Loops()
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
            Id : 1
        }
    ]
    return(
        <>
        <table border="2px solid black" >
            <thead>
                <tr>
                <td>
                    Name
                </td>
                <td>
                    Age
                </td>
                <td>
                    Email
                </td>
                <td>
                    id
                </td>
            </tr>
            </thead>
            <tbody>
                {
                    obj.map((item)=>( //map() is an array method that loops through every item in an array and returns a new array.
                <tr key={item.Id}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Email}</td>
                    <td>{item.Id}</td>
                </tr>))
                }
            </tbody>
            
        </table>
        </>
    )
}
export default Loops;