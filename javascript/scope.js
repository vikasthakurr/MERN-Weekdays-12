/*
  ==============================================================
  JAVASCRIPT SCOPE
  ==============================================================

  Scope determines the accessibility (visibility) of variables.
  In JavaScript, there are three main types of scope:
  1. Global Scope
  2. Function Scope
  3. Block Scope

  --------------------------------------------------------------
  1. GLOBAL SCOPE
  --------------------------------------------------------------
  - Variables declared outside any function or block have Global Scope.
  - They can be accessed from anywhere in the JavaScript program.
*/

let globalVar = 10;

/*
  --------------------------------------------------------------
  2. BLOCK SCOPE
  --------------------------------------------------------------
  - Variables declared inside a { } block cannot be accessed from outside the block.
  - This applies ONLY to 'let' and 'const'. 
  - 'var' DOES NOT have block scope.
*/

{
  const blockScoped = 10;
  // console.log(blockScoped); // Accessible here
}
// console.log(blockScoped); // ReferenceError: blockScoped is not defined

/*
  --------------------------------------------------------------
  3. FUNCTION SCOPE (Local Scope)
  --------------------------------------------------------------
  - Variables defined inside a function are not accessible from outside the function.
  - This applies for 'var', 'let', and 'const'.
*/

function localScopeDemo() {
  var functionScoped = 10;
  // console.log(functionScoped); // Accessible here
}
// localScopeDemo();
// console.log(functionScoped); // ReferenceError: functionScoped is not defined

/*
  --------------------------------------------------------------
  4. LEXICAL SCOPE & SCOPE CHAIN
  --------------------------------------------------------------
  - Lexical Scope: An inner function has access to the variables 
    of its outer function.
  - Scope Chain: If a variable is not found in the current scope, 
    JS looks for it in the outer scope, and so on, until the 
    global scope.
*/

let a = 10;

function outer() {
  // console.log(a); // Accesses global 'a'

  let b = 20;

  function inner() {
    console.log(a); // Accesses global 'a'
    console.log(b); // Accesses 'b' from outer()'s scope (Lexical Scope)
  }
  inner();
}
// outer();

/*
  --------------------------------------------------------------
  5. CLOSURES
  --------------------------------------------------------------
  - A closure is the combination of a function bundled together 
    with references to its surrounding state (the lexical environment).
  - It allows an inner function to access its outer scope even 
    after the outer function has finished executing.
*/

function closureExample() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

// let res = closureExample();
// res(); // 1
// res(); // 2

// console.log(a); // Refers to global 'a'
