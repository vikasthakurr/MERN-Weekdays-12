/**
 * JavaScript Global Execution Context (GEC)
 *
 * Definition:
 * The Global Execution Context is the base/default execution context that is created
 * by the JavaScript engine before any code is executed. It represents the global
 * scope where the code is being run (e.g., `window` in browsers, `global` in Node.js).
 *
 * Phases of Execution Context:
 *
 * 1. Memory Creation Phase (Hoisting):
 *    - The JS engine skims through the code and allocates memory for variables and functions.
 *    - Variables (declared with `var`) are initialized with `undefined`.
 *    - Functions are stored with their entire function definition.
 *
 * 2. Code Execution Phase:
 *    - The JS engine executes the code line by line.
 *    - Variables are assigned their actual values.
 *    - Function calls trigger the creation of a new Function Execution Context (FEC).
 *
 * Call Stack:
 * - The GEC is the first thing pushed onto the Call Stack.
 * - When the entire script finishes execution, the GEC is popped off the stack.
 */

// Example: Understanding GEC and Hoisting

console.log("Value of 'a' before assignment:", a);
// Output: undefined (Memory was created during phase 1)

greet();
// Output: "Hello from GEC!" (Function definition was stored during phase 1)

var a = 10;
var b = 20;

function greet() {
  console.log("Hello from GEC!");
}

function add(n1, n2) {
  var sum = n1 + n2; // This happens inside its own Function Execution Context
  return sum;
}

var result1 = add(a, b);
var result2 = add(5, 15);

console.log("Value of 'a' after assignment:", a);
console.log("Result 1:", result1);
console.log("Result 2:", result2);

/**
 * Step-by-Step Visualization of this code:
 *
 * Phase 1 (Memory Creation):
 * - a: undefined
 * - b: undefined
 * - greet: {...function definition...}
 * - add: {...function definition...}
 * - result1: undefined
 * - result2: undefined
 *
 * Phase 2 (Code Execution):
 * - Line 32: console.log(a) -> prints undefined
 * - Line 35: greet() -> creates FEC, executes, prints "Hello from GEC!", returns.
 * - Line 38: a = 10 (Memory updated)
 * - Line 39: b = 20 (Memory updated)
 * - Line 46: add(10, 20) -> creates FEC:
 *      - Memory: n1: 10, n2: 20, sum: undefined
 *      - Execution: sum = 30, returns 30
 * - Line 46: result1 = 30 (Memory updated)
 * - Line 47: add(5, 15) -> creates FEC... result2 = 20
 * - Line 49-51: Remaining console logs execute.
 */
