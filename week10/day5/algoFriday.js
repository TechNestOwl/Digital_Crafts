// Write a function that accepts a number as an argument. 
// The function should then return the factorial of that number. 
// A factorial of a number means to multiply all whole numbers between that number in one. 
// Example: 5! => 5 * 4 * 3 * 2 * 1 = 120.


() => {

}

// Create a JS function to transform the object values to an array
const obj = {
    person: {
        name: 'Tyler',
        age: 28,
        height: '180cm'
    },
    hobbies: {
        sport: 'Football',
        game: 'Overwatch'
    }
};

const personDetails = Object.keys(obj);
console .log(personDetails);

const personInfo = Object.values(obj);
console.log(personInfo);

// Answer/solution
function factorialize(num) {
    let result = num
    if (num === 0 || num === 1) {
        return 1
    }
    while (num > 1) {
        num--
        result *= num
    }
    return result
};


