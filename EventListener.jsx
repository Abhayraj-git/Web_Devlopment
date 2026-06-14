function App2()
{
    function callfun()
    {
       alert("Funtion Called")
    }

    const fruit=(name)=>
      {
          alert(name) // Arrow funtion easier way to write a funtion
      }

    return(
        <>
        <h1>Click Below</h1>
        <button onClick={callfun}>Click Me</button>  
        <button onClick={()=>fruit("Apple")}>Apple</button>
        <button onClick={()=>fruit("Banana")}>Banana</button>
        </>
    )
   
}
export default App2;
// here we have to funtion defination to onclick function because it will not worl correctly if we pass funtion calling