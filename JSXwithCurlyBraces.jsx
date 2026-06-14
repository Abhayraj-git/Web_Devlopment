function App1()
{
    const num = 10;
    const num1 = 3;
    function Abh()
    {
        return(
            <>
            <h1>Hello</h1>
            </>
        )
    }
    function Calc(a,b,op)
    {
        if (op=="+")
        {
            return a+b;
        }
        else if (op=="-")
        {
            return a-b;
        }
        else if (op=="*")
        {
            return a*b;
        }
        else
        {
            return a/b;
        }
    }
return(
    <>
    <h1>{num*num1}</h1>
    <h1>{num+num1}</h1>
    {Abh()}
   <h1> {Calc(10,20,"/")} </h1>
    </>
)
}

export default App1;