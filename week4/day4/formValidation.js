const form = document.querySelector("form");
const email = document.querySelector("email").value

const validateForm = (email, password) => {
    console.log("valadating..");

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    
    return (true)
        alert("You have entered an invalid email address!")
    return (false)
    
}








