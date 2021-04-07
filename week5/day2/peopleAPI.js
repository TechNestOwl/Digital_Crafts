const mainContainer = document.querySelector("#main-container");


const getData = async () => {
    let retrievePpl = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01")
    let formattedPpl = await retrievePpl.json();
    console.log(formattedPpl);

    let retrievePlc = await fetch("https://fakerapi.it/api/v1/places?_quantity=1")
    let formattedPlc = await retrievePlc.json();
    console.log(formattedPlc);

    let retrievePhoto = await fetch("https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300")
    let formattedPhoto = await retrievePhoto.json();
    console.log(formattedPhoto);

    let name = document.querySelector("#PersonName");
    
    name.innerHTML = "Name: " + formattedPpl.data[0].firstname;


}
getData();