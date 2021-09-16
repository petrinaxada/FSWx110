var submitform = document.getElementById('Submit');
submitform.addEventListener('click', Submission);
function Submission(e){
    e.preventDefault()
    
    var item = document.createElement('p');
    item.setAttribute("name", "info");
    item.setAttribute("id","info1");
    item.textContent = document.getElementById('todo1').value
    
   
    var item2 = document.createElement('p');
    item2.setAttribute("name", "info");
    item2.setAttribute("id","info2");
    item2.textContent = document.getElementById('todo2').value;
    document.body.appendChild(item);
    document.body.appendChild(item2);
   

    var remove = document.createElement("INPUT");
    remove.setAttribute("type", "button");
    remove.setAttribute("id", "del");
    remove.setAttribute("name", "del");
    remove.setAttribute("value", "delete");
    document.body.append(remove);

    remove.addEventListener("click", goaway);
function goaway(){
   document.body.removeChild(item);
   document.body.removeChild(item2);
   document.body.removeChild(remove);
}

    document.getElementById("form").reset();
}