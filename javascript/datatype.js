/*
  ==============================================================
  JAVASCRIPT DATA TYPES & MEMORY MANAGEMENT
  ==============================================================

  In JavaScript, data types are divided into two main categories:
  1. Primitive Data Types
  2. Reference (Non-Primitive) Data Types

  --------------------------------------------------------------
  1. PRIMITIVE DATA TYPES
  --------------------------------------------------------------
  - Characteristics: 
    - Immutable (cannot be changed once created).
    - Stored directly in the STACK memory.
    - Accessed by VALUE.
    - When you assign a primitive value to another variable, a COPY is created.

  Types:
  - String    : e.g., "Hello"
  - Number    : e.g., 25, 3.14
  - Boolean   : e.g., true, false
  - null      : e.g., let x = null (represents intentionally empty value)
  - undefined : e.g., let y; (variable declared but not assigned)
  - Symbol    : unique identifiers
  - BigInt    : for very large integers

  --------------------------------------------------------------
  2. REFERENCE (NON-PRIMTIVE) DATA TYPES
  --------------------------------------------------------------
  - Characteristics:
    - Mutable (can be changed).
    - Stored in the HEAP memory.
    - Accessed by REFERENCE (address).
    - When you assign a reference type to another variable, it points to the 
      SAME memory address (no copy is made of the actual data).

  Types:
  - Objects   : { name: "Vikas", age: 25 }
  - Arrays    : [1, 2, 3]
  - Functions : function() { ... }

  --------------------------------------------------------------
  STACK VS HEAP MEMORY
  --------------------------------------------------------------

  STACK MEMORY:
  - Used for Static Data.
  - Includes Primitive values and Reference pointers.
  - Faster access.
  - Follows LIFO (Last In First Out).

  HEAP MEMORY:
  - Used for Dynamic Data.
  - Includes Objects, Arrays, and Functions.
  - Slower access (requires following a reference from the stack).
  - Memory is managed by the JavaScript Garbage Collector.

  --------------------------------------------------------------
  EXAMPLE: STACK MEMORY (Primitive)
  --------------------------------------------------------------
*/

let myName = "Vikas";
let anotherName = myName; // A COPY is created in the stack

anotherName = "Thakur"; // Changes anotherName, but myName remains "Vikas"

// console.log(myName); // Output: Vikas
// console.log(anotherName); // Output: Thakur

/*
  --------------------------------------------------------------
  EXAMPLE: HEAP MEMORY (Reference)
  --------------------------------------------------------------
*/

// let userOne = {
//   email: "user@google.com",
//   upi: "user@ybl",
// };

// let userTwo = userOne; // Points to the SAME reference in the Heap

// userTwo.email = "vikas@google.com"; // Changes the email for BOTH variables

// console.log(userOne.email); // Output: vikas@google.com
// console.log(userTwo.email); // Output: vikas@google.com

/*
  --------------------------------------------------------------
  VISUAL REPRESENTATION
  --------------------------------------------------------------

  [ STACK ]                          [ HEAP ]
  ----------------------             ----------------------
  |                    |             |                    |
  |  anotherName: "Thakur"           |                    |
  |  myName: "Vikas"   |             |                    |
  |                    |             |                    |
  |  userTwo: [Ref1] --|------------>| {                  |
  |  userOne: [Ref1] --|------------>|   email: "...",    |
  |                    |             |   upi: "..."       |
  |                    |             | }                  |
  ----------------------             ----------------------
*/

let bioData = {
  name: "vikas",
  age: 25,
};
// let bioData = new Object();
// console.log(typeof bioData);
// console.log(bioData);
// console.log(bioData.age);
// console.log(Object.entries(bioData));

//static
// let { name } = bioData;
// console.log(name);
// console.log(bioData);
{
}

// function abc() {
//   return "hi";
// }
// let res = abc();
// console.log(res);

// let sayHi = function () {
//   return "hi";
// };

// function abc() {
//   console.log("hii");
// }
// abc();

// const sayHi = (props) => console.log("hii");
// sayHi();
// let a = 10;
// function abc() {
//   // console.log(a);
// }

// (function sayHi() {
//   console.log("hi");
// })();
