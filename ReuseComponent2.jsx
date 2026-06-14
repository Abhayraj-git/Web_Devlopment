function Reuse2({data})
{
    return(
    <div style={{
        border:"1px solid black",
        padding : '10px',
        margin : '10px',
        borderRadius : '10px'
    }}>
        <h3>Name : <span style={{color:'green'}}> {data.Name}</span></h3>
        <h3>Name : <span style={{color:'green'}}> {data.Age}</span></h3>
        <h3>Name : <span style={{color:'green'}}> {data.Email}</span></h3>
        <h3>Name : <span style={{color:'green'}}> {data.Id}</span></h3>
    </div>
    )
}
export default Reuse2;