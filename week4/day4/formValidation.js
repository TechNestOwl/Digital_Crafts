
const form = document.querySelector("form");

const validateNumbers = (number) => {
    myRegex = /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/;
    return myRegex.test(number);
};

form.addEventListener("submit",(event) => {
    const billInput = document.querySelector("#bill");
    const tipInput = document.querySelector("#tip");
    
    if(
        !validateNumbers(billInput.value) ||
        !validateNumbers(tipInput.value)
        ){
            event.preventDefault();
            alert("Please enter valid amount.");
        } else {
            event.preventDefault();
            calculateTip();
        }
});
    
    function calculateTip() {

        const billAmount = document.querySelector("#bill").value;
        //console.log(billAmount)
        const tipAmount = document.querySelector("#tip").value;
        //console.log(tipAmount)
        //Calculate
        const tipValue = billAmount * `1.${tipAmount}`;
        const yourTip = document.querySelector(".total");
        yourTip.innerText = tipValue.toFixed(2);

        //create tip history List
        /*const tipDiv = document.createElement("div")
        tipDiv.className = "tip-history"*/
        //console.log(tipDiv)
        const list = document.querySelector(".tip-history");
        const newListItem = document.createElement("li");
        newListItem.innerText = `${tipAmount}%`;
        list.append(newListItem);
    }
    // const validateNumber = () => {
        //     console.log("validate")
        //     myRegex = /[0-9]+$/;
        //     return myRegex.test(number);
        
        
// }

// form.addEventListener("submit", (event)) => {
//     const numInput = document.querySelector("#bill").value

// }


/* 
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)
return (true)
    alert("You have entered an invalid email address!")
return (false)
*/