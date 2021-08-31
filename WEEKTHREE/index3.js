///Complete the Pause and Practice: Turn an Array into a Visual List///

//var number = 10;
var headers = [];
const names = [
    "steve",
    "larry", 
    "joe",
    "shirley",
    "steph", 
    "nate", 
    "rick", 
    "emily"
    ];
for (i = 0; i <= names.length; ++i){
    headers[i] = document.createElement("h1");
    //headers[i].textContent="Hello World";
    headers[i].setAttribute("id", names[i]);
    headers[i].textContent = names[i];
    document.body.append(headers[i]);
    //STYLING
    document.getElementById(names[i]).style.textAlign = "center";
    document.getElementById(names[i]).style.color = "blue";
    document.getElementById(names[i]).style.fontFamily = "impact";  
};
//names.forEach.