/// Your task is to display to the user the key and key code they press.

///Example of output: You've pressed the "a" key. It's key code is 65.

///Wes Bos made this https://keycode.info/ for us to use as an example. 

document.addEventListener("keypress", function(e){
    var x = e.keyCode;
    var y = e.key;
    alert("You pressed " + y + ". The key code is "+ x)
})