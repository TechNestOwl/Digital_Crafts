const mainContainer = document.querySelector("#main-container");
const pplBtn = document.querySelector("#pplBtn");
const plcBtn = document.querySelector('#plcBtn');


const getPpl = async () => {
    let retrievePpl = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01")
    let formattedPpl = await retrievePpl.json();
    console.log(formattedPpl);
    let retrievePhoto = await fetch("https://fakerapi.it/api/v1/users?_quantity=1&_gender=male")
    let formattedPhoto = await retrievePhoto.json();
    console.log(formattedPhoto);

    for (let person of formattedPpl.data) {
        const pplCard = document.createElement("div");
        pplCard.className = "peopleCard";
        //name
        const personName = document.createElement('h3');
        // ?? const personFullName = "Name: " + person[0].firstname + " " + person[0].lastname;
        const personFullName = "Name: " + formattedPpl.data[0].firstname + " " + formattedPpl.data[0].lastname;
        personName.innerHTML = personFullName;
        
        //add photo
        const photo = document.createElement('img');
        photo.src = formattedPhoto.data[0].image;
        photo.className = "card__image";
        pplCard.append(personName,photo);
        mainContainer.append(pplCard);
    }
    
}


const getPlc = async () => {
    let retrievePlc = await fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
    let formattedPlc = await retrievePlc.json();
    console.log(formattedPlc);
    let location = document.querySelector("#location");
    location.innerHTML = "City:" + " " + formattedPlc.data[0].city;

}


pplBtn.addEventListener("click", function() {
    getPpl();
})

plcBtn.addEventListener("click",function() {
    getPlc();
})
