/*
  ==============================================================
  JAVASCRIPT CONDITIONAL STATEMENTS
  ==============================================================

  Conditional statements are used to perform different actions based 
  on different conditions. They control the flow of execution in 
  a program.

  --------------------------------------------------------------
  1. IF ... ELSE IF ... ELSE
  --------------------------------------------------------------
  - The 'if' statement executes a block of code if a condition is true.
  - 'else if' specifies a new condition to test, if the first condition is false.
  - 'else' executes a block of code if all previous conditions are false.

  Syntax:
  if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true
  } else {
    // code to be executed if condition1 and condition2 are false
  }
*/

let age = 19;

if (age > 18) {
  console.log("you are able to vote");
} else if (age === "18") {
  console.log("you can vote but u are just 18");
} else {
  console.log("not able to vote");
}

/*
  --------------------------------------------------------------
  2. TERNARY OPERATOR (Shorthand if-else)
  --------------------------------------------------------------
  - It is the only JavaScript operator that takes three operands.
  - Often used as a shortcut for the 'if' statement.

  Syntax:
  condition ? expressionIfTrue : expressionIfFalse;
*/

console.log(age > 18 ? "can vote" : "cant vote");

/*
  --------------------------------------------------------------
  3. SWITCH STATEMENT
  --------------------------------------------------------------
  - Used to perform different actions based on different conditions.
  - It is often more efficient than long if-else if chains.
  - 'break' prevents the code from running into the next case.
  - 'default' specifies the code to run if there is no case match.

  Syntax:
  switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
*/

let marks = 90;

switch (marks) {
  case 90:
    console.log("Grade: A+");
    break;
  case 80:
    console.log("Grade: A");
    break;
  default:
    console.log("Grade: B or below");
}

let day = 2; // Assuming 2 represents Tuesday

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("invalid day");
}

/*
  --------------------------------------------------------------
  4. TRUTHY AND FALSY VALUES
  --------------------------------------------------------------
  In JavaScript, a value is either "truthy" or "falsy".

  Falsy Values: 
  - false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

  Truthy Values:
  - Everything else is truthy! (e.g., "0", "false", [], {}, 1)

  --------------------------------------------------------------
  5. LOGICAL OPERATORS IN CONDITIONALS
  --------------------------------------------------------------
  - && (Logical AND) : True if both operands are true.
  - || (Logical OR)  : True if at least one operand is true.
  - !  (Logical NOT) : Inverts the boolean value.
*/

let hasId = true;
let isCitizen = true;

if (hasId && isCitizen && age > 18) {
  console.log("Eligible for national voting");
}
