// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// Psuedocode: 
// a describe method that lists a function name divisbleBy 
// add test/it method within the describe block that describes what the function will do in plain words 
// use expect method, that will call on the divisibleBy() function, and use the matcher .toEqual()


// describe("divisibleBy", () => {
//     it("returns a certain string depending on the argument the function takes in", () => {
//         expect(divisibleBy(object1)).toEqual("15 is divisible by three");
//         expect(divisibleBy(object2)).toEqual("0 is divisible by three");
//         expect(divisibleBy(object3)).toEqual("-7 is not divisible by three");
//     });
//   });


//  After running this test, I received this failed: ReferenceError: divisbleBy is not defined. This means it's a good fail because it says our test is written correctly, but failed because when I tried to invoke my function divisibleBy(), it couldn't find it. 

// b) Create the function that makes the test pass.

//PSEUDO CODE:
// Declare a function named divisbleBy 
// input/parameter: called myObject
// argument: the variables: object1, object2, object3
// Expected output: If the object1 variable is divisble by 3 it will return "15 is divisible by three", If object2 is divisible by 3 it will return "0 is divisible by three", and if object3 is divisble by 3, it will return "-7 is not divisible by three"

// const divisibleBy = (myObject) => {
//     if(myObject % 3 !== 0) {
//         return `${myObject} not divisible by three`
//     } else if(myObject % 3 === 0) {
//         return `${myObject} is divisible by three`
//     } 
// }

// console.log(divisibleBy(object1.number))
// console.log(divisibleBy(object2.number))
// console.log(divisibleBy(object3.number))

// alternatively, I tried to use the Ternary Operator to shorten my code and it would look like this:

const divisibleBy = (myObject) => {
    return myObject.number % 3 === 0 ? `${myObject.number} is divisible by three` : `${myObject.number} is not divisible by three`
}

console.log(divisibleBy(object1))
console.log(divisibleBy(object2))
console.log(divisibleBy(object3))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Psuedocode: 
// a describe method that lists a function name allCaps
// add test/it method within the describe block that says returns a new array with all the words from the orginial array capitalized 
// use expect method, that will call on the allCaps() function, and use the matcher .toEqual()

// describe("allCaps", () => {
//     it("returns a new array with all the words from the orginial array capitalized", () => {
//         expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
// })

// After running my jest test, I was shown a failed test:    ReferenceError: allCaps is not defined. This is a good fail because it means that our code is correct, however, the computer is looking for the function allCaps and could not find it. We will be defining allCaps within the next portion of this question. 

// b) Create the function that makes the test pass.
// PSUEDOCODE: 
// Declare a high-order function names allCaps 
// Input/Parameter: called myArray
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] & ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"] 
// Will utilize .map() function which will iterate the array and output a new array of the same lenghth.
// Use built-in function .toUpperCase() to upper case the word and .substring() method to isolate that we want to only uppercase the first letter 

const allCaps = (array) => {
    return array.map((value) => value[0].toUpperCase() + value.substring(1))
}
console.log(allCaps(randomNouns1))
console.log(allCaps(randomNouns2))



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// PSEUDOCODE: 
// Describe a method named logValue
// Within the describe block, add a test/it method that says: it will take a string and log the index of the first vowel 
// Nested inside the test block, we will have an expect method calling to the logValue function, followed by the .toEqual() matcher that it will return: 1, 0, 2 

// describe("logValue", () => {
//     it("returns the index of the first vowel within the string", () => {
//         expect(logValue(vowelTester1)).toEqual(1)
//         expect(logValue(vowelTester2)).toEqual(0)
//         expect(logValue(vowelTester3)).toEqual(2)
//     })
// })

// Once I ran the test, I ran into 1 failure stating: ReferenceError: logValue is not defined. This is a good fail because this means my code is correct, however when the computer is looking for the function logValue, it cannot be found since I have not yet created it. 

// b) Create the function that makes the test pass.

// PSEUDOCODE: 
// Create a function name logValue 
// Input/parameter: argument of a string 
// create a for loop that will iterate through the index values of the string
// Need to look for the first vowel - create a variable named vowel that has all vowels 
// Use condition statement to review if the argument has an element that is stated in new declared variable (that has only vowels), to return the index of the first vowel of the string 

const logValue = (string) => {
    let vowel = ["a", "e", "i", "o", "u"]
    for(i = 0; i < string.length; i++) {
        if(vowel.includes(string[i]) === true) {
            return i
        }
    }
}
console.log(logValue(vowelTester1))
console.log(logValue(vowelTester2))
console.log(logValue(vowelTester3))