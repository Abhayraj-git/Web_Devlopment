function Pure()
{
    return (
        <>
            <h2>Pure Components</h2>
            <Abhay count ={1}/>
            <Abhay count ={2}/>
            <Abhay count ={3}/>
            <Abhay count ={4}/>
        </>
    )
}
const Abhay = ({count})=>
{
    return (<h1>Count : {count}</h1>
    )
}
export default Pure;