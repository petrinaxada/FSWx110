let form = document.getElementById("myForm");
let subName = form.elements["name"];
let subAge = form.elements["age"];
let subGender = form.elements["gender"];

form.addEventListener("submit", function() {
    alert("Name: " + subName.value + " / Age: " + subAge.value + " / Gender: " + subGender.value);
});