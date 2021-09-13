/// The "submit" event refreshes your browser by default
/// use "e.preventDefault()" in the first line of your callback function to prevent this
/// remember to pass "e" into the callback function

let form = document.getElementById("submit-me");
let nameInput = form.elements["name"];
let ageInput = form.elements["age"];

nameInput.setAttribute("type", "text");
ageInput.setAttribute("type", "number");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Name: " + nameInput.value + " / Age: " + ageInput.value);
});
