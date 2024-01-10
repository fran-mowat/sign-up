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

let checkPhoneValidity = (e) => {
    let input = e.target; 
    let errorMessage = input.nextElementSibling;

    if (input.value.length == 0) {
        errorMessage.textContent = "* This field is required.";
        input.style.border = "1px solid #ff3f3f";
    } else if (! input.checkValidity()){
        errorMessage.textContent = "Please enter a valid phone number.";
        input.style.border = "1px solid #ff3f3f";
    } else {
        errorMessage.textContent = "";
        input.style.border = "1px solid #E5E7EB";
    }
}

let checkPasswordValidity = (e) => {
    let input;

    if (e == undefined){
        input = document.getElementById("confirm-password");
    } else {
        input = document.getElementById("password"); 
    }

    console.log(input);
    let errorMessage = input.nextElementSibling;

    if (input.value.length < 8) {
        errorMessage.textContent = "Your password must contain at least 8 characters.";
        input.style.border = "1px solid #ff3f3f";
    } else if (input.value.length == 0) {
        errorMessage.textContent = "* This field is required.";
        input.style.border = "1px solid #ff3f3f";
    } else if (! input.checkValidity()){
        errorMessage.textContent = "Please enter a valid password.";
        input.style.border = "1px solid #ff3f3f";
    } else {
        errorMessage.textContent = "";
        input.style.border = "1px solid #E5E7EB";
    }
}

let checkPasswordConfirmationValidity = () => {
    let passwordMatch = document.getElementById("confirm-password");
    let password = document.getElementById("password");

    password.addEventListener("keyup", checkPasswordConfirmationValidity);

    let errorMessage = passwordMatch.nextElementSibling;

    if (passwordMatch.value == password.value){
        checkPasswordValidity();
    } else {
        errorMessage.textContent = "Passwords entered do not match.";
        passwordMatch.style.border = "1px solid #ff3f3f";
    }
}

let firstName = document.getElementById("name");
firstName.addEventListener("keyup", checkInputValidity);

let surname = document.getElementById("surname");
surname.addEventListener("keyup", checkInputValidity);

let email = document.getElementById("email");
email.addEventListener("keyup", checkInputValidity);

let phone = document.getElementById("phone");
phone.addEventListener("keyup", checkPhoneValidity);

let password = document.getElementById("password");
password.addEventListener("keyup", checkPasswordValidity);

let passwordConfirmation = document.getElementById("confirm-password");
passwordConfirmation.addEventListener("keyup", checkPasswordConfirmationValidity);
