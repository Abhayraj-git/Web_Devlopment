

function Forword({ref})
{
return(
    <>
    <input type="text" name="" id="" ref={ref}/>
    </>
)
}
export default Forword;

import Forword from "./ForWardRef";
import { useRef } from "react"

// function App() {
//       const inputRef = useRef(null);
//     function handle()
//     {
//         inputRef.current.focus();
//         inputRef.current.style.color='red';
//         inputRef.current.value='200';

//     }
//     return(
//         <>
//            <Forword ref={inputRef} />
//            <button onClick={handle}>Focus</button>
//         </>
//     )
// }

// export default App;