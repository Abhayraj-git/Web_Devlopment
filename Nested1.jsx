import Type from "./Nested2";

function Collage({ collage }) {
  return (
    <>
      <div style={{backgroundColor:'gray',border:'2px solid',margin:'10px',padding:'10px 10px'}}>
        <h2>Institute Name : {collage.Collage}</h2>
        <h3>Name : {collage.Name}</h3>
        <h3>Age : {collage.Age}</h3>
        <h3>City : {collage.City}</h3>
        {
            collage.type.map((item,index)=>(
                <Type item={item} />
            ))
        }
      </div>
    </>
  );
}
export default Collage;
