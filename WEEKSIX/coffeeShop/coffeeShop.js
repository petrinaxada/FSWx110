const button = document.getElementById('button')
var total = document.getElementById('total')
var coffee = document.getElementById('numCoffee')
var cookie = document.getElementById('numtea')
var scone = document.getElementById('numbagel')
console.log(coffee)
console.log(tea)
console.log(bagel)
console.log(total)

button.addEventListener('click', function(event){
    event.preventDefault
    var valcoffee = coffee.value;
    var valcookie = tea.value;
    var valscone = bagel.value;
    console.log(valcoffee);
    console.log(valtea);
    console.log(valbagel);

var totalPrice = document.createTextNode( 'Total Price: $' + ((valcoffee * 1.25) + (valtea * .75) + (valbagel * 1)));
console.log(totalPrice);
total.appendChild(totalPrice);
})