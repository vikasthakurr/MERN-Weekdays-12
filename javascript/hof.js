/**
 * HIGHER ORDER FUNCTIONS (HOF) IN JAVASCRIPT
 *
 * Definition:
 * A Higher Order Function is a function that does at least one of the following:
 * 1. Takes one or more functions as arguments (callback functions).
 * 2. Returns a function as its result.
 *
 * Why use HOF?
 * - They allow us to write more concise, readable, and reusable code.
 * - They help in achieving abstraction by hiding implementation details.
 */

/* ==========================================
   1. forEach()
   ==========================================
   - Used to iterate over an array.
   - It executes a provided function once for each array element.
   - It does not return a new array.
*/
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((ele) => {
//   console.log(ele);
// });

/* ==========================================
   2. map()
   ==========================================
   - Creates a new array by performing a function on each array element.
   - It does not change the original array.
*/
// let salary = [1000, 2000, 3000];
// salary.map((ele) => {
//   console.log(ele * 2);
// });

/* ==========================================
   3. Custom Higher Order Functions
   ==========================================
   We can create our own HOFs by passing functions as arguments.
*/

// // Callback functions
// function tenPercent(salary) {
//   return salary * 2;
// }

// function twentyPercent(salary) {
//   return salary * 0.2;
// }

// // Custom HOF using a loop
// // function calculateTax(salary, cb) {
// //   let res = [];
// //   for (let i = 0; i < salary.length; i++) {
// //     res.push(cb(salary[i]));
// //   }
// //   return res;
// // }

/* ==========================================
   4. Array Prototype (Extending built-in objects)
   ==========================================
   Adding a custom HOF to the Array prototype so it can be called on any array.
*/
// Array.prototype.calculateTax = function (cb) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(cb(this[i]));
//   }
//   return res;
// };

// // let arr2 = [200, 300, 400, 500];
// // let res = arr2.calculateTax(tenPercent);
// // console.log(res);

/* ==========================================
   5. 'this' Keyword and Context
   ==========================================
*/
// ("use strict");
// function abcd() {
//   console.log(this);
// }

// // Short note on Arrow Functions and 'this':
// // Arrow functions do not have their own 'this'.
// // They inherit it from the parent scope (lexical scoping).

// let obj1 = {
//   fname: "vikas",
//   a: 10,
//   abc: () => {
//     console.log(this.a); // 'this' refers to window/global object, not obj1
//   },
// };

/* ==========================================
   6. filter()
   ==========================================
   - Creates a new array with all elements that pass the test implemented by the provided function.
*/
let arr = [2, 3, 4, 5, 6];
// arr.filter((ele) => {
//   if (ele % 2 == 0) {
//     console.log(ele);
//   }
// });

/* ==========================================
   7. reduce()
   ==========================================
   - Executes a reducer function on each element of the array, 
     resulting in a single output value (e.g., sum of all elements).
*/
// arr.reduce((acc, ele) => acc + ele);

/* ==========================================
   8. Method Chaining
   ==========================================
   - HOFs can be chained together to perform complex operations in a single statement.
*/
// arr.map().filter().reduce();

// TODO: create a higher order function to calculate the compound interest
