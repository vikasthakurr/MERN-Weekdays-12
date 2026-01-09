/*
  ==============================================================
  JAVASCRIPT EXECUTION CONTEXT & MEMORY MANAGEMENT
  ==============================================================

  1. GLOBAL EXECUTION CONTEXT (GEC)
  --------------------------------------------------------------
  - The default environment where JS code runs.
  - Consists of two phases:
    a) Creation Phase: Memory is allocated for variables (var = undefined, 
       functions = whole definition).
    b) Execution Phase: Variables are assigned values and functions 
       are executed.

  2. CALL STACK
  --------------------------------------------------------------
  - JS uses a Call Stack to track function execution (LIFO - Last In, First Out).
  - GEC is at the bottom; each function call creates a new Execution Context 
    pushed onto the stack.

  3. PRIMITIVE vs REFERENCE TYPES (Stack vs Heap)
  --------------------------------------------------------------
  - Primitives (String, Number, Boolean, null, undefined, Symbol, BigInt):
    - Stored directly in the CALL STACK.
    - Assignment/Copying creates a NEW value (Copy by Value).
  - Reference Types (Objects, Arrays, Functions):
    - Stored in the HEAP memory.
    - The STACK only holds a pointer (reference) to the Heap address.
    - Assignment/Copying copies the pointer (Copy by Reference).
*/

// --- PRIMITIVE TYPE EXAMPLE (Copy by Value) ---
let a = 10;
let b = a; // 'b' gets a fresh copy of 10
b = 30;
// console.log(a); // Still 10
// console.log(b); // 30

// --- REFERENCE TYPE EXAMPLE (Copy by Reference) ---
let obj1 = {
  name: "vikas",
};

let obj2 = obj1; // 'obj2' points to the same object in Heap as 'obj1'
obj2.name = "akash"; // Modifying through 'obj2' affects 'obj1'

console.log(obj2); // { name: 'akash' }
console.log(obj1); // { name: 'akash' }
