///ADD EVENT LISTENERS ASSIGNMENT///
//CHANGE DEFAULT TO BLACK
document.getElementById("mySquare").style.backgroundColor = "black";
function backToBlack()
{
    document.getElementById("mySquare").style.backgroundColor = "black";
}
//GREEN: HOVER
function greenHover()
{
    document.getElementById("mySquare").style.backgroundColor = "green";
}
document.getElementById("mySquare").addEventListener("mouseenter", greenHover);
document.getElementById("mySquare").addEventListener("mouseleave", backToBlack);
//YELLOW: CLICK HOLD
function yellowPress()
{
    document.getElementById("mySquare").style.backgroundColor = "yellow";
}
document.getElementById("mySquare").addEventListener("mousedown", yellowPress)
//BLUE: RELEASE CLICK
function blueRelease()
{
    document.getElementById("mySquare").style.backgroundColor = "blue";
}
document.getElementById("mySquare").addEventListener("mouseup", blueRelease);
//RED: DOUBLE CLICK
function redDouble()
{
    document.getElementById("mySquare").style.backgroundColor = "red";
}
document.getElementById("mySquare").addEventListener("dblclick", redDouble);
//PURPLE: MOUSE SCROLL
function purpleScroll()
{
    document.getElementById("mySquare").style.backgroundColor = "purple";
}
window.addEventListener("wheel", purpleScroll);
///REVERT COLORS W/ KEYBOARD
document.addEventListener("keydown", function(event) {
    if (event.key == 'g')
    {
        document.getElementById("mySquare").style.backgroundColor = "green";
    }
    else if (event.key == "y")
    {
        document.getElementById("mySquare").style.backgroundColor = "yellow";
    }
    else if (event.key == "b")
    {
        document.getElementById("mySquare").style.backgroundColor = "blue";
    }
    else if (event.key == "r")
    {
        document.getElementById("mySquare").style.backgroundColor = "red";
    }
    else if (event.key == "p")
    {
        document.getElementById("mySquare").style.backgroundColor = "purple";
    }
});