function Props({Prop})
{
    return(
        <>
        <h1>Name : {Prop.User} {Prop.UserUsing}</h1>
        <h2>Age : {Prop.Age}</h2>
        <h3>Email : {Prop.Email}</h3>
        <h4>user : {Prop.UserUsing}</h4>
        </>
    )
}
export default Props; //Props are used to send data from a parent component to a child component.


// for this we need to make our App.jsx like this 

// import Props from "./Propes"

// function App()
// { 
//   let Obj1={
//     User:"Abhay Raj",
//     Age :"20",
//     Email : "Abhay@gmail",
//     UserUsing:"Gupta"
//   }

//   let Obj2={
//     User:" Raj",
//     Age :"21",
//     Email : "Raj@gmail",
//     UserUsing:"Gupta"
//   }
//   return (
//     <>
//     <Props Prop = {Obj1}></Props>
//     <Props Prop = {Obj2}></Props>
//     </>
//   )
  
// }
// export default App