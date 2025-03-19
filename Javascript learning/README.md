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
