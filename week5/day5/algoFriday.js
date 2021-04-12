// Algorithm one: Create a function that will check if two arguments are anagrams of 
// each other (a word or phrase that is formed by rearranging the letters of another word).

// // Pure letter strings
// console.log(isAnagram("hello", "ollh")); // true
// console.log(isAnagram("listen", "lidfje")); // false
// console.log(isAnagram("Listen", "silent")); // true
// // String phrases with spaces (Needs to ignore spaces)
// console.log(isAnagram("dorMITORY", "dirty room")); // true
// // String phrases with punctuation (Needs to ignore punctuation).
// console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true



const isAnagram = (string1, string2) => {
    string1 = string1.toLowerCase();
    // string1 = string1.trim()
    string2 = string2.toLowerCase();
    // string2 = string2.trim()
    let splitSt1 = string1.split('');
    let sortedSt1 = splitSt1.sort();
    let splitSt2 = string2.split('');
    let sortedSt2 = splitSt2.sort();

    // console.log(sortedSt1, sortedSt2);
    console.log(string1,string2);
    
    if (sortedSt1.join('') === sortedSt2.join('')) {
        console.log("Is an anagram");
    } else {
        console.log("Is not an anagram");
    }
}

const ex1 = "Listen";
const ex2 = "SilenT"

isAnagram(ex1, ex2);