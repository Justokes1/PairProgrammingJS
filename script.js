// EASY: Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.

// EASY (2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.
// Example 1:
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// Output: primeArray = [19 ,29 ,47 , 83]

numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = [];
function checkPrime(numArray) {
    if (numArray < 2) return false;

    for (let i = 2; i < numArray; i++) {
        if (numArray % i == 0) {
            return false;
        }
    }
    return true;
}

numArray.forEach(function (element) {
    const item = checkPrime(element);
    if (item) {
        result.push(element);
    }
});
console.log(result);

// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean.
// Example:
// Input: String 1: So dark the con of man
// String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// String 2: Dogs eat ants
// Output: False

function checkAnagram(a, b) {
    if (a.length !== b.length) {                 // if the length of each string is not equal then automatically return false;
        return false;
    }                                           // otherwise, run this function to rearrange the string
    let str1 = a.split('').sort().join('');     //.split sorts strings into array //.sort sorts array alphabetically //.join array elements into string
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {                        // if match return true
        return true;
    } else {
        return false;
    }

    let result = (str1 === str2);
    return result;
}
console.log(checkAnagram('peach', 'cheap'));

// MEDIUM (4)
// Create a car object with the items: Make, Model, Year, Milage, and Color.Then create 3 methods in the object;
// A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod.Each of these methods
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new
//     mileage.
//         driveToWork = 33 miles
// driveAroundTheWorld = 24, 000 miles
// runErrands = 30 miles

const car = {
    make: "Toyota",
    model: "Camry",
    color: "Black",
    year: 2014,
    mileage: 5000,
    driveToWork: function (x) {
        newMileage = this.mileage + x;
        return (`Old mileage: ${this.mileage} | New mileage ${newMileage}`)
    },
    driveAroundTheWorld: function (x) {
        newMileage = this.mileage + x;
        return (`Old mileage: ${this.mileage} | New mileage ${newMileage}`)
    }
};
console.log(car.driveToWork(33));
console.log(car.driveAroundTheWorld(24000));
