// EASY: Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sort(y) {
  let even = [];
  let odd = [];
  for (let i = 0; i < y.length; i++) {

    if (y[i] % 2 === 0) {
      even.push(y[i])
      console.log(even)
    } else {
      odd.push(y[i])
      console.log(odd)
    }
  }
};

// EASY (2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.

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

// MEDIUM (1) 
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
// is a vowel

let letter = prompt('Please choose a letter');

function vowelChecker(x) {
  let vowels = /[aeiou]/gi;
  let match = letter.match(vowels);

   if (match) {
     console.log(`${letter} is a vowel.`) 
   } else {
     console.log(`${letter} is not a vowel`)
   }
};

vowelChecker(letter);

// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean.

function checkAnagram(a, b) {
    if (a.length !== b.length) {                 // if the length of each string is not equal then automatically return false;
        return false;
    }                                           // otherwise, run this function to rearrange the string
    let str1 = a.split('').sort().join('').trim();     //.split sorts strings into array //.sort sorts array alphabetically //.join array elements into string
    let str2 = b.split('').sort().join('').trim();
    if (str1 === str2) {                        // if match return true
        return true;
    } else {
        return false;
    }

    let result = (str1 === str2);
    return result;
}
console.log(checkAnagram('cheap', 'peach'));

// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two
// numbers without a remainder.

function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
  
    while(y) {
      var d = y;
      y = x % y;
      x = d;  
    }
    return x;
  };

// MEDIUM (4)
// Create a car object with the items: Make, Model, Year, Milage, and Color.Then create 3 methods in the object;
// A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod.Each of these methods
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new
//     mileage.

class car {
    constructor (make, model, year, color, mileage) {
      this.year = year;
      this.make = make;
      this.model = model;
      this.color = color;
      this.mileage = mileage;
    }
  
    driveToWork() {
      this.mileage + 42;
      console.log(this.mileage += 42)
    };
    driveAroundTheWorld() {
      this.mileage + 24000;
      console.log(this.mileage += 24000)
    };
    runErrands() {
      this.mileage + 14;
      console.log(this.mileage += 14)
    };
  };
  
  let myCar = new car('2023', 'Nissan', '400z', 'Black', 0);
  
  myCar.driveToWork();
  myCar.driveAroundTheWorld();
  myCar.runErrands();
  
// HARD (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of
// matching brackets({}, [], ()).These brackets must be nested appropriately in order to return a true value

const balance = (str) => {
    const array = []; const open = { "{": "}", "[": "]", "(": ")", }; 
    const closed = { "}": true, "]": true, ")": true, }; 
  
    for (let i = 0; i < str.length; i++) {
        let check = str[i];
        if (open[check]) { 
          array.push(check); 
        } else if (closed[check]) { 
          if (open[array.pop()] !== check) { return false; 
          } 
        }
    } return array.length === 0;
  }; console.log(balance("{hello}"))