// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(""))

// a) Your answer: It will be each letter in their own string separated
    // Excepted output: "E" "c" "h" "o" "2" "0" "2" "2"

// b) Verify and explain: My excepted output was correct. Looking at the code, I can see that there is a constant variable named cohort that was assigned a string of ""Echo 2022". In the console.log, I can see that we are invoking the cohort variable and using the built-in method, .split(""). .split("") is a built in method that will split the single string into individual strings that only contain one character. 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Expected output: undefined 
// b) Verify and explain: My expected output was correct. Taking a look at the code, I can see that this is a function named greeter. Although we are invoking the function with the argument "LEARN Student", when you run this code, it will come up undefined. This is because in line 22 of the code, there is no return call to let the computer know that we want it to return the string `Hello, ${name}!`. 

// To make this code work, you would need to include return at the beginning of line 22. It should look like this: 

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }

// Once you have made this change and invoke the argument again, the output would then be: `Hello, LEARN Student!'


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer: expected output: [8, 10,12, 14, 16] 
// b) Verify and explain: My expected output was correct and the output was the array multiplied by two giving us [8, 10,12, 14, 16]. Looking at this code, I can see there is a variable named multipliedByTwo which was assigned a high-order function with an array of numbers. Within this same code, I can see that a built-in method, .map() was utilized which signified to me that we will be iterating through the array given and output a new array with the same length. Within the parentheses of the .map(), we are asking it to return the number elements and multiply it by 2 so when we invoked the function using console.log, the new array given to us was the original array numbers doubled. 


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My expected output was correct. Taking a look at this code, I can see that this is a high-order function that is asking the computer to take the array of [11, 12, 13, 14, 15] and use the .filter() built-in method to iterate through the array and return a new array with only the value that satisfy the stated condition. The stated condition in this function is to divide each number in the array by 2 and look for the values that do not have a remainder of 0. When we are utilizing console.log() and giving it the argument of variable onlyOdds, we are asking the computer to review the high-order function and output the values that still have remainers. If a value is divided by 2 and has a remainder that means that it is an odd number which is why within our new array, we are only given any values that were odd. 


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: I predicted that the expected output would be JavaScript and I was correct. Looking at the code, I can see that this variable myCodingSkills is an object function because within the object there are 4 different key:value pairs. 

// In line 64 where we are using console.log to invoke the object function and argument languages[0] we are asking the computer to call the variable myCodingSkills and take a look at the languages key and output the value that holds the index of 0 which would be the first value within the square brackets.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: My expected output: 
// Learn { student: George, cohort:"Echo", year: 2022 }

// b) Verify and explain: My expcected output was correct. Taking a look at this code, I can see that this is a class function as there is a constructor method, .this is used to refer to the object it belongs to, and the name of the class is using PascalCase. 

// Knowing that this is a class function, helps me read the variable learnStudent. Variable learnStudent is being assigned the class Learn function and is asking to create a new instance where the object is assigned to George. Knowing this, when we are invoking the computer to console.log(learnStudent), we are asking the computer to reference the class and inject "George" into the object that is not yet assigned a data type. Therefore, the output would be Learn { student: George, cohort:"Echo", year: 2022 }