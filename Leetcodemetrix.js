document.addEventListener('DOMContentLoaded',function()
{
    const searchbtn = document.getElementById('btn');
    const userName = document.getElementById('name');
    const Easy = document.getElementById('easy');
    const Medium = document.getElementById('medium');
    const Hard = document.getElementById('hard');

    function ValidateUsesrName (userName)
    {
        if(userName.trim()==="")
        {
            alert("Username should not be Empty");
            return false ;
        }
        const regex = /^[a-zA-Z0-9-]{1,15}$/;
        const isMatching = regex.test(userName);
        if(!isMatching)
        {
            alert("Invalid UserName ");
        }
        return isMatching
    }
    
    async function FetchUserDetail(userName) 
    {
        
        
        try
        {
            searchbtn.textContent = "Searching...";
            searchbtn.disabled = true;

                 const proxyUrl = 'https://cors-anywhere.herokuapp.com'
                 const targetUrl = 'https://leetcode.com/graphql/'
                 const myHeaders = new Headers();
                 myHeaders.append("content-type","application/json");
                 
                 const graphql = JSON.stringify({
                    query : "\n  query userSessionProgress($userName: String!){\n allQuestionsCount {\n difficulty \n count \n} \n matchedUser {userName : $userName }{\n submitstats{\n acSubmissionNum{\n difficulty \n count sub mission \n {\n totalSubmission {\n difficulty\n count\n submission\n }\n }\n}\n",
                    variables: {"userName": '$(userName)'}

                 })
                 
                 const requestOptions = 
                 {
                    method: "POST",
                    headers: myHeaders,
                    body: graphql,
                    redirect: "follow"
                 };

            const response = await fetch(proxyUrl+targetUrl,requestOptions);
            if (!response.ok)
            {
                throw new Error("Unable to fetch the user details ");
            }
            const data = await response.json();
        }
        catch(error)
        {
            statsContainer.innerhtml = <p> No Data Found </p>
        }
        finally
        {
            searchbtn.textContent = "Search";
            searchbtn.disabled = false;
        }
    }
searchbtn.addEventListener('click',function()
{
    const userName = userNameInput.value;
    if (ValidateUsesrName(username))
    {
        FetchUserDetail(userName);
    }
})

})
