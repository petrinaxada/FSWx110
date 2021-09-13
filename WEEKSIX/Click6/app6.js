// make the box disapear when the user clicks it
let box = document.getElementsByClassName("red-box");
let boxArr = Array.from(box);
let myBox = boxArr[0];

myBox.addEventListener("click", function() {
    myBox.setAttribute("style", "display: none");
})
