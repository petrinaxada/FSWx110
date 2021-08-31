//CALCULATOR PROJECT
function addition(num1, num2)
{
    return(num1 + num2);
}
function subtraction(num1, num2)
{
    return(num1 - num2);
}
function multiplication(num1, num2)
{
    return(num1 * num2);
}
//ADDITION
document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("result").textContent = addition(Number(document.getElementById("addFirst").value), Number(document.getElementById("addSecond").value));
});
//SUBTRACTION
document.getElementById("subButton").addEventListener("click", function() {
    document.getElementById("result").textContent = subtraction(Number(document.getElementById("subFirst").value), Number(document.getElementById("subSecond").value));
});
///MULTIPLY
document.getElementById("mulButton").addEventListener("click", function() {
    document.getElementById("result").textContent = multiplication(Number(document.getElementById("mulFirst").value), Number(document.getElementById("mulSecond").value));
});