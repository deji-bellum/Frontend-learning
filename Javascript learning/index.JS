/*ALERTS*/
// Example 1: Simple Alert
alert("Welcome to my JavaScript journey!");

// Example 2: Alert with a Variable
var message = "Amesiere"
var herName = "Grace"
alert(message + " " + herName)

// Example 3: Alert with a Function
function showAlert(message) {
    alert(message);
}
showAlert("This alert is from a function!");

/*STRING CONCATENATION*/
// Example 1: Using `+` Operator
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
alert("Full Name: " + fullName);

// Example 2: Using `+=` Operator
var message = "JavaScript";
message += " is fun!";
alert(message);

/*STRING LENGTH*/
// Example 1: Basic Length Check
var text = "JavaScript Mastery";
alert("The text length is: " + text.length);

// Example 2: Length with User Input
var tweet = prompt("Compose your tweet")
var tweetCounter = tweet.length
alert("You have used up " + tweetCounter + "words");
alert("You have " + (140-tweetCounter) + " " + "number of words remaining")

/*PROMPTS*/
// Example 1: Simple Prompt
let name = prompt("What is your name?");
alert("Hello, " + name + "!");

/*SLICE*/
// Example 1: Simple Slice
let text = "JavaScript is awesome!";
let slicedText = text.slice(0, 10);  // Extracts characters 0 to 9
alert("Sliced text: " + slicedText);

// Example 2: Negative Index
let lastPart = text.slice(-8);  // Extracts the last 8 characters
alert("Last part: " + lastPart);

/*STRINGS TO UPPERCASE*/
// Example 1: Simple Uppercase Conversion
let message = "hello world";
alert(message.toUpperCase());

// Example 2: Uppercase with Prompt
let userInput = prompt("Type something:");
alert("In uppercase: " + userInput.toUpperCase());



/*The code below is to combination of prompts, string slice and how to change strings to uppercase*/
var name= prompt("What is your name");
myName.slice(0,1);
var sliceName= first;
first.toUppercase();
myName.slice(1,6);
alert('Hello' + "First")

/*FUNCTIONS*/
/*Basic functions with parameters and arguments*/
function greetUser(name) {
    var greeting = "Hello, " + name + "!";
    console.log(greeting);
}
greetUser("Alice");  // Output: Hello, Alice!
greetUser("Bob");    // Output: Hello, Bob!

/*Function with Multiple Parameters*/
function calculateArea(length, width) {
    var area = length * width;
    console.log("The area is: " + area);
}
calculateArea(5, 10);  // Output: The area is: 50
calculateArea(7, 3);   // Output: The area is: 21



/*This code is for the "LIFE IN WEEKS" challenge*/
function lifeInWeeks(age){

    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365
    var weeks = yearsRemaining * 52
    var months = yearsRemaining * 12
    
    console.log ("You have " + days + " days," + weeks + " weeks," + months + " months remaining" ); 
    }
    
    lifeInWeeks(23);

    /*This code is for the "BMI calculator" challenge*/
    function bmiCalculator(weight, height){
        var bmiHeight = height * height;
        var bmi = weight /bmiHeight;
        bmi=Math.floor(bmi)
        console.log ("Your BMI is " + bmi )
       
      }
      bmiCalculator(80, 1.8)

/*IF-ELSE STATEMENTS*/

/*Example 1*/
    let number = 7;
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
    // Output: 7 is an odd number.

/*Example 2*/
    let enteredPassword = "admin123";
    let correctPassword = "admin123";

    if (enteredPassword === correctPassword) {
        console.log("Login successful!");
    } else {
        console.log("Incorrect password. Please try again.");
    }
    // Output: Login successful!

/*COMPARATORS*/
/*== vs ===*/
    console.log(5 == "5");   // true (values are the same)
    console.log(5 === "5");  // false (different data types)

/*!== vs !===*/
    console.log(10 != "10");   // false (values are the same)
    console.log(10 !== "10");  // true (different data types)
