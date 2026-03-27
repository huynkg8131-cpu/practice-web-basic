const display = document.querySelector('.display');

function appendToDisplay(input)
{
    display.value += input;
}
function Cleardisplay()
{
    display.value = "";
}
function Calculate()
{  
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error"
        
    }
    
   
}