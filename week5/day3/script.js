const getPpl = async () => {
    let retrievePpl = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01")
    let formattedPpl = await retrievePpl.json();
    // console.log(formattedPpl);
    let retrievePhoto = await fetch("https://fakerapi.it/api/v1/users?_quantity=1&_gender=male")
    let formattedPhoto = await retrievePhoto.json();
    // console.log(formattedPhoto);
    for (let person of formattedPpl.data) {
        let pplCard = document.createElement("div");
        pplCard.className = "people";
        //name
        const personName = document.createElement('h3');
        const personFullName = "Name: " + formattedPpl.data[0].firstname + " " + formattedPpl.data[0].lastname;
        personName.innerHTML = personFullName;
        
        //add photo
        const photo = document.createElement('img');
        photo.src = formattedPhoto.data[0].image;
        photo.height = "250"
        photo.width = "250"
    }
    
}