//String interpolation
//print(f"This is string {interpolation} in python")


let height = "6ft";
let weight = "140lbs";
let JoesDimenisons = `Joe's heght is ${height} and he weighs ${weight}`;

console.log(JoesDimenisons);

// for in is for objects. 
// for in loop itetrates over an object, returns the keys as strings
const collectionOfPizzas = {
    firstPizza: {
        crust: "thin",
        topping: ["cheese", "pepperoni", "spinach", "pineapple"],
        size: "large",
        sauce: ["marinara", "alfredo"]
    },
    secondPizza: {
        crust: "thicc",
        topping: ["cheese", "pepperoni", "spinach", "pineapple"],
        size: "large",
        sauce: ["marinara", "alfredo"]
    }
};
for( const pizza in collectionOfPizzas) {
    console.log(pizza.crust);
};


// for of is for arrays

let cars = ["Subaru", "Audi", "Honda", "BMW"];

for (const car of cars) {
    console.log("this is a ", car);
}

