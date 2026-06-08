let buttons = document.querySelectorAll("button");

let Input = document.querySelector('#display');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let value = button.textContent.trim();
        if (value === "C")
        {
            Input.value = 0;
        }
        else if (value ==="Cancel")
        {
           Input.value = " ";
        }
        else if (value === "=" || value === "Enter")
        {
            try
            {
            Input.value = eval(Input.value);
            }
            catch
            {
                Input.value = "Error";
            }
        }
        else
            {
              Input.value = Input.value+value;
            }
    });
});