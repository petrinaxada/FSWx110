var box = document.querySelector(".red-box");

var newPara = document.createElement("P");
newPara.setAttribute("id","Para");
newPara.innerText= "Coordinates";
document.body.append(newPara);

var getPara = document.getElementById("Para");
getPara.style.textAlign = "center";

box.addEventListener("mouseover", XYZ);
function XYZ(event){
    var x = event.clientX;
    var y = event.clientY;
    getPara.innerHTML="Mouse Coordinates: " + x +" "+ y ;
};