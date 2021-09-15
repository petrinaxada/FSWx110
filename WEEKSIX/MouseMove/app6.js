let boxNode = document.getElementsByClassName("red-box");
let boxArr = Array.from(boxNode);
let myBox = boxArr[0];

myBox.addEventListener("mousemove", function(e) {
    myBox.textContent = "This is the mouse coordinates: X=" + e.clientX + " / Y=" + e.clientY;
});

myBox.addEventListener("mouseout", function() {
    myBox.textContent = "";
});
