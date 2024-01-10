//let form = document.querySelector("form");
//console.log(form.checkValidity());

let checkInputValidity = (e) => {
    let input = e.target; 
    let errorMessage = input.nextElementSibling;

    if (input.value.length == 1){
        errorMessage.textContent = input.id[0].toUpperCase() + input.id.slice(1) + " requires minimum 2 characters.";
        input.style.border = "1px solid #ff3f3f";
    } else if (input.value.length >= 30){
        errorMessage.textContent = "Value must be less than 30 characters.";
        input.style.border = "1px solid #ff3f3f";
    } else if (input.value.length == 0){
        errorMessage.textContent = "* This field is required.";
        input.style.border = "1px solid #ff3f3f";
    } else if (! input.checkValidity()){
        errorMessage.textContent = "Please enter a valid " + input.id + ".";
        input.style.border = "1px solid #ff3f3f";
    } else {
        errorMessage.textContent = "";
        input.style.border = "1px solid #E5E7EB";
    }
}

let firstName = document.getElementById("name");
firstName.addEventListener("keyup", checkInputValidity);

let surname = document.getElementById("surname");
surname.addEventListener("keyup", checkInputValidity);

let email = document.getElementById("email");
email.addEventListener("keyup", checkInputValidity);