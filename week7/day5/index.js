// What will the output produce? DO NOT RUN IN CONSOLE.
const array1 = [33, 4, 88, 1, 25];
console.log(array1.map((i) => i + 5).filter((i) => i % 2).length);


substring= (str1,str2) => {
    console.log(str1);
    const string1 = ( str1.replace(/\s/g, ''));
    const string2 = ( str2.replace(/\s/g, ''));


    let result = string1.includes(string2);
    // const answer = str1.includes(str2);
    console.log(result);
};
substring("concept", "cep"); // true
substring("aaabbbaabbab", "aaba"); // false
substring("the brown cow jumped over the moon", "moonthe brown cow"); // true
substring("baananana", "nab"); // true
substring("this wont work", "r u shore"); // false
// Missing Digit
// Write a function that when given a string equation with one digit 
// as an 'x', return the value of 'x' that makes the equation true.

// console.log(findX("10 * x = 20"));
// Part 1
// console.log(findX("10 * x = 20")); // returns 2
// console.log(findX("2 + 4 = x")); // returns 6
// console.log(findX("x - 11 = 33")); // returns 44
// // Part 2
// console.log(findX("1x0 * 2 = 200")); // returns 0
// console.log(findX("80 / 2 = x0")); // returns 4
// console.log(findX("111 + 11x = 222")); // returns 1
