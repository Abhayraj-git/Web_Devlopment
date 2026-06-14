function Wrapper({children,color})
{
    return(
        <div div style={{backgroundColor:"green",color:color,border:"5px solid",margin:"10px"}}>
        {children}</div>
    )
}
export default Wrapper;


// import Wrapper from "./Wrapper"

// function App()
// { 

//   return (
//     <>
//    <Wrapper  color="orange">
//     <h1>My Name is Abhay Raj Gupta</h1>
//    </Wrapper>
//     </>
//   )
  
// }
// export default App