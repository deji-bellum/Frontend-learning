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