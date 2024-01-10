let form = document.querySelector("form");
console.log(form.checkValidity());

let checkInputValidity = (e) => {
    if (e.target.value.length == 1 || e.target.value.length >= 30){
        e.target.nextElementSibling.textContent = "Value must be between 2 and 30 characters.";
    } else if (e.target.value.length == 0){
        e.target.nextElementSibling.textContent = "* This field is required";
    } else if (! e.target.checkValidity()){
        e.target.nextElementSibling.textContent = "Invalid value";
    } else{
        e.target.nextElementSibling.textContent = "";
    }
}

let firstName = document.getElementById("first-name");
firstName.addEventListener("keyup", checkInputValidity);

let surname = document.getElementById("surname");
surname.addEventListener("keyup", checkInputValidity);

let email = document.getElementById("email");
email.addEventListener("keyup", checkInputValidity);