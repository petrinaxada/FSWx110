document.form2.addEventListener("submit", Submission)

//news

function Newsletter(name) {
    const letter = document.querySelectorAll(`input[name="${name}"]:checked`);
    let choice = [ ];
        letter.forEach((radio) =>{
            choice.push(radio.value);
        });
        return choice
    }

function getCheckboxes(name) {
    const allergyList = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [ ];
        allergyList.forEach((checkbox) =>{
            values.push(checkbox.value);
        });
        return values
    }

function Submission(){
    alert('Name: ' + document.getElementById("fname").value +' '+document.getElementById("lname").value + 
            "\nAge: " + document.getElementById("age").value +
            "\nNewsletter Sign-Up: " + Newsletter("news") +
            "\nProduct: " + document.getElementById("Product").value +
            "\nLocation: " + getCheckboxes('Location') +
            "\nThanks for Shopping!"
    );
    document.getElementById("form").reset();
}
