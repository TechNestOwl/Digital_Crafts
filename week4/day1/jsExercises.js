//variables
var doNotUse = "not suggested to use in modern use of JS";
let x = 666;
const y = "shouldn't changes";

//array 
let thisIsAnArray = [1,2,5,69, "sixtynine"];

//object 
let tastySnacks = {
    seaweed:"tastes gud",
    chipsNHummus: "good proteind",
    peanutButte:"yummo"
};

let integer = 5;
let disBeAString = "string";
disBeAString = "now the string is this";

let newVariable = integer * 5;
let shwag = ["swag", 123123, true, false, "boolean"];

console.log(shwag[1]);
console.log(shwag[3]);
console.log(shwag[4]);
console.log(shwag.length);


let people = {
    Bill: {
        name: "Bill",
        age: 10,
        height: 7.1, 
        metric: "ft"
    },
    Jake: { 
        name: "Jake",
        age: 11,
        height: 6.1, 
        metric: "ft"
    },
    Tom: {
        name: "Tom",
        age: 19,
        height: 7.0, 
        metric: "ft"
    },
    Bubba: {
        name: "Bubba",
        age: 100,
        height: 71.00000098, 
        metric: "ft"
    },
    Forest: {
        name: "Forest",
        age: 30,
        height: 6, 
        metric: "ft"
    }

};

console.log(people.Bill.name);
console.log(people.Forest.age);
console.log(people.Tom.height);
people.Tom.height = 1.2;
people.Tom.metric = "meters";
people.Jake.sport = "Mountain Biking";

