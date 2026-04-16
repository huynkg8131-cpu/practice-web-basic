const inputBox = document.getElementById("input");
const listcontainer = document.getElementById("list-container");

function addTask()
{
    if ( inputBox.value === '')
    {
        alert("You must write something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
}
listcontainer.addEventListener("click", function(e) {
  if (e.target.matches("li")) {
    e.target.classList.toggle("checked");
    saveData();

  }
  
   else if (e.target.matches("span")) {
    e.target.parentElement.remove();
    saveData();
  }
});
function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();