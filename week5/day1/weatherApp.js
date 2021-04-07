
let zipcode = document.querySelector("#zipcode");
const button = document.querySelector("#zipBtn");
let li1 = document.querySelector("#li1")
let li2 = document.getElementById("#li2")
let li3 = document.getElementById("#li3")

const getWeatherData = async (zippy) => {
    const data = await fetch(
        ``);
    //console.log(data);
    const formattedData = await data.json();
    console.log(formattedData);

    let weather = document.querySelector("#li1");
    weather.innerHTML = "Current weather " + formattedData.weather[0].main;
    let temp = document.querySelector("#li2");
    temp.innerHTML = "Current temp " + formattedData.main.temp;
    let windspeed = document.querySelector("#li3");
    windspeed.innerHTML = "Current windspeed" + formattedData.wind.speed;


};


zipBtn.addEventListener("click", function(evt) {
    evt.preventDefault()
    getWeatherData(zipcode.value);
});