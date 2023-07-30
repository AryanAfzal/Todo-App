// geting elements
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");


// function makes li tag and enables span which actually is use to delete the todo


function addtask(){
    if(inputbox.value === ''){
        alert("you must write something!");
    }
  else{
    let li=document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML ="\u00d7";
    li.append(span);
  }
  // This automaically clears the written text in feild  
  inputbox.value ="";
  savedata();
}
 // the Event listener used to check and delete the class
listcontainer.addEventListener( "click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    savedata();
}
else if(e.target.tagName === "SPAN"){
 e.target.parentElement.remove();
 savedata();
}

},false);

// This code stores task in local storage
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
// This code brings task in local storage
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();