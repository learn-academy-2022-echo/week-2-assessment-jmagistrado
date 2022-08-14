# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A Parameter, which is also called the input, is a placeholder of information that is inserted into the function and is assigned an argument. 

An argument would be the information that is passed through the function. This is then what the computer will consider when running through the function to create an output  

Researched answer: My answer above was on the right track. A parameter is a way to give a placeholder variable which is added into a set of parentheses of the function expression. Once you are able to pass information through the parentheses of the function, you can utilize it to perform logic. 

Once you have written a parameter within your function, you can then assign it a value which is called an argument. The argument of a function would hold some sort of actual connect that the computer is able to pass through the function to perform its logic. You have to remember that an arugment has to be a Javascript data type. For example, a number, string, an array would be all approriate information you can have as an arguement. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() has three predefined parameters that it can take in to perform logic. It is value, index, array. It is important to know that for the built-in method .map() to work, it is required that you give it a value so that it can perform its iteriation. The other two: index and array are optional parameters. 

Researched answer: My answer is correct. .map() must have at least the value as a parameter for it to iterate through an array. However, you have the ability to also give a parameter of index and array if neccessary. An example of using a .map() would be if I wanted to iterate through an array of numbers and return a new array of the same length but with the numbers multipled by 3. Because I want to change the value of the array, I could use .map() and set it with the parameter with .map(value) and code that I want the computer to return value * 3.

3. What is the difference between map and filter?

Your answer: The built-in method .map() is a functionality where it takes in an array and will output a new array with the same length of the original array. For example, if you wanted your function to take an array of numbers and output an array with the values multiplied by 3, utilizing .map() would allow your function to iterate through the original array and output a new array that includes each value multipled by 3. 

The built-in method .filter() is functionality that will take an array and output a new array of values that meet certain conditions or are found truthy. For example, if you wanted a function to take an array of names and only output an array that includes names starting with J, you can use the .filter() to iterate and locate those names that meet the conditions you have set. 

Researched answer: My answer above is correct. Both built-in methods are utilized to iterate through arrays but depending on which you use, it will output a certain array. 

4. What is the DOM?

Your answer: DOM stands for Document Object Model. The DOM would be the visible/visual representation of the code you have written. For example, when you look at a website on your phone or computer, you are looking seeing all the code that you have written display what you have told the computer you want it to show to a user. 

Researched answer: My answer is correct. DOM allows developers to see the interface of the website and this is where you can review the content like the paragraphs someone has written. You can see the style which would include the colors of the background, the font used, or even if there are photos. Lastly, this is where you can see the structure as well. This means the amount of space one column can take up or how the page is divide to include different items within the application. 

5. What is React? Why would you use it?

Your answer: React is a JavaScript library that was built by Facebook. It allows for developers to organize different parts of code into components - which live separately from the entire code and have the ability to be reused. This helps companies like Spotify and Airbnb, who use React, to have the ability to have thousands of developers work on the same code and isolate problems that occur by being able to find in what component has an error. 

Researched answer: My answer was correct. In addition to my above answer, React is also an open sourced front-end library which is utilized in creating interfaces on webpages and as well as phone applications.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in JavaScript means to have your code be viewable by others to see. 

Researched answer: I am unfamiliar with hoisting so it was difficult of me to provide a definition of what hoisting is. After reviewing this term, I understand that hoisting is when you relocate all of your variable declarations at the top of the scope before your code. This is something that is done to allow developers to call functions before even writing them in our code. It is recommended to hoist variables so that you od not lead to unexpected errors. 

An example of this would be if we were creating a simple function called myDog which is to output my dog's name,  before our function, we would want to declare a variable named dogName = "Precious" before I started writing my code, so I can reference the variable dogName within my code. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: is a detailed description of what type of features you'd like for the user to see within the webpage/phone application. 

2. Spread operator: Allows iteration where you can copy all or parts of an given array and place it into another array or object 

3. React props: To pass data and behavior to another component. However, this can be only and passed in one way, which means it the information can be only passed down to nested components 

4. Conditional rendering: Uses the logical AND (&&) to toggle between when an element in JSX is shown to the user and it is not. This allows developers to create components that will encapsulate the type of behavior that is needed for the application 

5. DOM events: Is interactions that the user has with your application. This can mean when a user is hovering over an element or when they click on a button with their mouse. 
