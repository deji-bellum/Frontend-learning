# JS Alerts
Alerts are simple popup boxes used to display messages in the browser. They are part of the window object, which is automatically available in JavaScript.

  ### Syntax
  alert("This is an alert message!");

  ### How It Works
  1. The alert message appears as a popup with an OK button.
  2. The script will pause until the user clicks OK.
  Since alerts interrupt the flow of your program, they are best used for simple warnings or debugging.

# Variables
Variables are used to store data in JavaScript. They can be declared using var, let or const

# Data Types
JavaScript has two main types of data:

  ### Primitive Data Types
  These are immutable and stored directly in memory.

  String: Text data (e.g., "Hello", 'World').
  Number: Includes integers and floating points (e.g., 5, 3.14).
  Boolean: True or false values (true, false).
  Undefined: A declared variable that hasn’t been assigned a value.
  Null: Represents an intentional absence of value.
  Symbol: Used for creating unique identifiers (advanced use).

  ### Reference (Non-Primitive) Data Types
  These are stored by reference in memory.

  Object: Key-value pairs (e.g., {name: "Alice", age: 30})
  Array: Ordered lists of values (e.g., ["apple", "banana"]).
  Function: Special object that can be executed.

# Naming Conventions
Use camelCase for variable and function names.
Use descriptive names that reflect the variable's purpose.
Example: userName, getTotalPrice.

# String Concatenation
Combining strings using the + operator or template literals.
Example:
var greeting = "Hello, " + name + "!";
var message = `Hello, ${name}!`;

# Functions
Functions are blocks of reusable code.
Example:
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
  ### Key concepts in function
  Parameters: Inputs specified in the function definition.
  Arguments: Values passed when calling the function.
  Return Value: The result a function provides back to the caller.

# Comparators (Comparison Operators)
Comparators are used to compare two values. They return either true or false.

  ### Comparison Operators 
  == means equal to (loose comparison). Example	5 == "5" gives an output of true
  ===	means strictly equal (type + value). Eample	5 === "5" gives an output of	false
  !=	means not equal.  Example 5 != "6" gives an output of true
  !==	means strictly not equal. Example 5 !== "5" gives an output of true
  >	means greater than. Example 10 > 5 gives an output of	true
  <	means less than. Example	3 < 5 gives an output of	true
  >= means greater than or equal to	. Example 5 >= 5 gives an output of true
  <= means less than or equal to. Example	4 <= 5 gives an output of	true

  ### Key Differences Between == and ===
  == only checks value equality (loose comparison).
  === checks both value and data type (strict comparison).
  Example:
  console.log(5 == "5");   // true (values are the same)
  console.log(5 === "5");  // false (type is different)

  ### Logical Operators
  Logical operators are used to combine multiple conditions.

  && means AND (All conditions true). Example true && true gives an otput of	true
  `	means OR (At least one true)
  !	means NOT (Reverses condition). Example !true gives an output of false

# While loops
The while loop is a control flow statement that allows code to be executed repeatedly as long as the specified condition is true.

  ### Key Characteristics of a While Loop:
  1. The condition is evaluated before the code block runs.
  2. If the condition is false at the start, the code block will not run at all.
  3. Suitable when the number of iterations is unknown beforehand.

# For Loop
The for loop is ideal when you know the exact number of iterations you want.

  ## Key Characteristics of a For Loop:
  The loop structure includes three parts:
  1. Initialization: Sets the starting value.
  2. Condition: The loop runs while this condition is true.
  3. Increment/Decrement: Updates the loop control variable.
  The loop's condition is checked before each iteration.

# Adding JavaScript to HTML
JavaScript can be added to an HTML file in three main ways:

1. Inline JavaScript: In this method, JavaScript code is directly placed inside an HTML tag using the onclick, onmouseover, or other event attributes. This method is generally not recommended for larger projects because it mixes HTML and JavaScript.

2. Internal JavaScript (Inside <script> tag in the HTML file): Internal JavaScript is added inside a <script> tag in the <head> or <body> section of the HTML file. It's useful for small to medium-sized scripts.

3. External JavaScript File: For better organization and scalability, JavaScript is often written in a separate .js file and linked to the HTML file.

# Document Object Model (DOM)
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML document as a tree of objects.

  ### Key Concepts in the DOM:
  1. Document: The root object that gives access to the entire HTML document.
  2. Nodes: Every HTML element, attribute, and text is represented as a node.
  3. Tree Structure: The DOM organizes these nodes in a tree-like hierarchy.

# Selecting HTML Elements with JavaScript
JavaScript provides various methods to select HTML elements using the DOM.

1. Using getElementById()
The getElementById() method selects an element by its ID.

2. Using querySelector()
The querySelector() method selects the first element that matches a given CSS selector.

3. Using querySelectorAll()
The querySelectorAll() method selects all elements that match a given CSS selector and returns a NodeList.

# Manipulating HTML Elements with JavaScript

1. Changing Text Content
The .textContent property changes the text inside an element.

2. Modifying CSS Styles
The .style property allows you to modify an element’s CSS.

# Adding an Event Listener to a Button
An event listener is a method that listens for specific user actions like clicks, keypresses, or mouse movements. Using the .addEventListener() method is the preferred way to handle events in JavaScript.

### Syntax 
element.addEventListener(event, callbackFunction);


### Why Use .addEventListener() Instead of Inline Events?
1. More flexible — you can attach multiple listeners to the same element.
2. Helps keep HTML and JavaScript separate (cleaner code).
3. Allows you to dynamically add or remove event listeners.

# Higher-Order Functions
A higher-order function is a function that either:
A. Takes another function as an argument
B. Returns a function as its output
Higher-order functions are a powerful feature in JavaScript that make code more concise, reusable, and modular.

### Common Examples of Higher-Order Functions
1. forEach() — Iterates over an array.
2. map() — Transforms array elements.
3. filter() — Filters elements based on a condition.
4. reduce() — Reduces an array to a single value.

# Javascript objects
An object in JavaScript is a collection of key-value pairs. Objects allow you to store related data and functions together.

There are two ways to create an object:

1. Object Literal Syntax
  const person = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      greet: function() {
          console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
      }
  };

2. Using the new Object() Syntax
  const car = new Object();
  car.brand = "Toyota";
  car.model = "Camry";
  car.year = 2022;

# Switch Statements
The switch statement is used to perform different actions based on different conditions. It's useful when you need to compare one value to multiple possible cases.

### Syntax
switch (expression) {
    case value1:
        // Code to execute
        break;
    case value2:
        // Code to execute
        break;
    default:
        // Code to execute if no case matches
}

# Keyboard Event Listeners
Keyboard events are triggered when a user presses a key on their keyboard. 
Common keyboard events include:

1. keydown — Fires when a key is pressed down.

2. keyup — Fires when a key is released.

3. keypress — Fires when a key producing a character is pressed.

# Callbacks
A callback function is a function that is passed as an argument to another function and is executed later.

### Why Use Callbacks?
1. To ensure certain code runs only after another code finishes.
2. Commonly used for asynchronous operations