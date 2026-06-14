import { lazy, Suspense, useState } from "react";

const User = lazy(()=>import('./LazyLoading'))
function App()
{
  const [load,setLoad] = useState(false)
  return (
    <div>
    <h1>
      Lazy Loading
    </h1>
    <button onClick={()=>setLoad(true)}>Load User</button>
    {
      load?<Suspense fallback={<h4>Loading...</h4>}><User /></Suspense>:null
    }
    </div>
  );
}
export default App;