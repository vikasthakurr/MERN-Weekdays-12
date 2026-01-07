/*
  JavaScript provides three ways to declare variables, each with 
  different behaviors regarding scope, re-assignment, and hoisting.

  1. var (The Legacy Way)
  --------------------------------------------------------------
  - Scope: Function-scoped (only restricted by functions).
  - Re-declaration: Allowed within the same scope.
  - Re-assignment: Allowed.
  - Hoisting: Hoisted and initialized with 'undefined'.
  - Global Object: Variables declared with 'var' become properties 
    of the global window object.

  --------------------------------------------------------------
  2. let (The Modern Way)
  --------------------------------------------------------------
  - Scope: Block-scoped (restricted by {} markers).
  - Re-declaration: NOT allowed in the same scope.
  - Re-assignment: Allowed.
  - Hoisting: Hoisted but NOT initialized (lives in TDZ).
  - Global Object: Does NOT become a property of 'window'.

  --------------------------------------------------------------
  3. const (For Constants)
  --------------------------------------------------------------
  - Scope: Block-scoped.
  - Re-declaration: NOT allowed.
  - Re-assignment: NOT allowed (must be initialized at declaration).
  - Hoisting: Hoisted but NOT initialized (lives in TDZ).
  - Use Case: Default to 'const' unless you know the value will change.

  --------------------------------------------------------------
  HOISTING
  --------------------------------------------------------------
  Hoisting is the JavaScript engine's behavior of moving declarations 
  to the top of their scope before code execution.

  - var: Accessible before declaration as 'undefined'.
  - let/const: Technically hoisted, but inaccessible until the line 
    of declaration is reached. Accessing them prematurely results in 
    a ReferenceError.

  --------------------------------------------------------------
  TEMPORAL DEAD ZONE (TDZ)
  --------------------------------------------------------------
  The TDZ is the period between the start of the block scope and 
  the actual line where the variable is declared.
  Entering the TDZ for a variable results in a ReferenceError if 
  accessed.
*/

// --- HOISTING WITH var ---
console.log(a); // Output: undefined (hoisted & initialized)
var a = 10;

// --- HOISTING WITH let/const (TDZ) ---
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// --- SCOPE DIFFERENCE ---
if (true) {
  var scopedVar = "I am function scoped";
  let scopedLet = "I am block scoped";
}

console.log(scopedVar); // Accessible!
// console.log(scopedLet); // ReferenceError: scopedLet is not defined

/*
  --------------------------------------------------------------
  COMPARISON TABLE
  --------------------------------------------------------------
  Keyword | Scope    | Re-declare | Re-assign | Hoisted   | TDZ
  --------|----------|------------|-----------|-----------|-----
  var     | Function | Yes        | Yes       | undefined | No
  let     | Block    | No         | Yes       | No init   | Yes
  const   | Block    | No         | No        | No init   | Yes
*/

/*
  --------------------------------------------------------------
  SUMMARY OF BEST PRACTICES
  --------------------------------------------------------------
  1. Use 'const' for everything that should not change.
  2. Use 'let' for variables that need to be re-assigned.
  3. Avoid using 'var' in modern JavaScript to prevent scope leaks 
     and weird hoisting issues.
*/
