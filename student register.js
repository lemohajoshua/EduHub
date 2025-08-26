const firstName = document.querySelector("#fname")
const otherName = document.querySelector("#oname")
const lastName = document.querySelector("#lname")
const regNumber = document.querySelector("#reg-no")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const errorNodes = document.querySelectorAll(".error")
const form = document.querySelector(".student-form")


form.addEventListener("submit", function(e){
    e.preventDefault();
    validateForm();
})

function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(firstName.value.length < 1){
        errorNodes[0].innerText = "This field is required";
        errorNodes[0].style.color = "red";
        firstName.classList.add("error-border")
        errorFlag = true;
    }

    if(otherName.value.length < 1){
        errorNodes[1].innerText = "The field is required";
        errorNodes[1].style.color ='red';
        otherName.classList.add("error-border")
        errorFlag = true;
    }
    
    if(lastName.value.length < 1){
        errorNodes[2].innerText = "This field is required";
        errorNodes[2].style.color = "red";
        lastName.classList.add("error-border")
        errorFlag = true;
    }
    
    if(regNumber.value.length < 1){
        errorNodes[3].innerText = "This field is required";
        errorNodes[3].style.color ="red";
        regNumber.classList.add("error-border")
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[4].innerText = "Please enter a valid email address";
        errorNodes[4].style.color = "red";
        email.classList.add("error-border")
        errorFlag = true;
    }

    if(password.value.length < 1){
        errorNodes[5].innerText = "This  field is required";
        errorNodes[5].style.color ="red";
        password.classList.add("error-border")
        errorFlag = true;
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
        errorNodes[i].style.color = "";
    }

    firstName.classList.remove("error-border");
    otherName.classList.remove("error-border");
    lastName.classList.remove("error-border");
    regNumber.classList.remove("error-border");
    email.classList.remove("error-border");
    password.classList.remove("error-border");
}

function emailIsValid(email){
     let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);

}