/*
  ==============================================================
  JAVASCRIPT LOOPS, OBJECTS & PARAMETERS
  ==============================================================

  1. LOOPS
  --------------------------------------------------------------
  - for loop: Classic loop for iterating with an index.
  - for...in loop: Iterates over the ENUMERABLE properties (keys) 
    of an object.
  - for...of loop: Iterates over ITERABLE objects like arrays, 
    strings, maps, sets.
  - forEach: An array method that executes a callback for each 
    element. Not a true loop, cannot be stopped with 'break'.

  2. OBJECT IMMUTABILITY
  --------------------------------------------------------------
  - Object.seal(obj): Prevents adding/deleting properties, but 
    existing properties CAN be modified.
  - Object.freeze(obj): Prevents adding/deleting/modifying properties. 
    The object becomes completely immutable.

  3. CLONING OBJECTS & ARRAYS
  --------------------------------------------------------------
  - Shallow Clone: { ...obj } or [ ...arr ]. Nested objects are 
    still referenced (not copied).
  - Deep Clone:
    a) JSON.parse(JSON.stringify(obj)): Common but fails with 
       functions/undefined/Date.
    b) structuredClone(obj): Modern native way for deep cloning.

  4. PARAMETERS (Rest vs Spread)
  --------------------------------------------------------------
  - Rest Parameter (...args): Collects multiple arguments into an array. 
    Used in function definitions.
  - Spread Operator (...arr): Expands an array into individual elements. 
    Used in function calls or literal assignments.
*/

// --- BASIC LOOPS ---
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// --- FOR EACH ---
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((ele) => {
//   console.log(ele);
// });

// --- OBJECTS & FOR...IN ---
// let obj = {
//   fname: "vikas",
//   age: 25,
//   salary: 123456789,
//   key: "vikas",
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }

// --- OBJECT IMMUTABILITY (SEAL & FREEZE) ---
// let obj = {
//   fname: "vikas",
//   age: 25,
// };

// Object.seal(obj);
// Object.freeze(obj);
// obj.fname = "akash";
// obj.salary = 1234567;
// console.log(obj);

// --- CLONING & SPREAD ---
// let obj1 = {
//   fname: "vikas",
//   age: 25,
//   address: {
//     state: "UP",
//     country: {
//       lname: "India",
//     },
//   },
// };

// let obj2 = obj1;
// let obj2 = { ...obj1 };
// let obj2 = structuredClone(obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.fname = "akash";
// obj2.age = 30;
// obj2.address.country.lname = "Rajasthan";
// console.log(obj2);
// console.log(obj1);

// --- ARRAY DESTRUCTURING ---
// let arr = ["apple", "carrot", "mangoes"];
// let [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);

// --- REST & SPREAD PARAMETERS ---
// function sum(a, b, ...args) {
//   let sum = 0;
//   console.log(a * b);
//   for (let i = 0; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   return sum;
// }

// let res = sum(1, 2, 4, 67, 8, 89, 9, 5, 43, 5, 78, 54, 33, 6, 78, 4, 34, 78);
// console.log(res);
