function PropFuntion({Abhay,getHelp,name})
{
    return(
        <>
        <button onClick={Abhay}>Abhay</button>
        <button onClick={()=>{getHelp(name)}}>getHelp</button>
        </>
    )
}
export default PropFuntion;

// import PropFuntion from "./FUnctionPassingByProps"
// function App() {
//   function Abhay()
//     {
//       alert('help!!!')
//     }
//     const getHelp=(name)=>
//     {
//       alert(name)
//     }
//   return (
//     <>
//      <PropFuntion Abhay={Abhay} getHelp={getHelp}  name = 'Abhay'/>
    
//      </>
//   )
// }

// export default App;