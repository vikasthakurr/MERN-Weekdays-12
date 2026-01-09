/**
 * FUNCTION BORROWING IN JAVASCRIPT
 *
 * Definition:
 * Function borrowing allows an object to use a method belonging to another object.
 * This is achieved using the built-in methods: call(), apply(), and bind().
 *
 * 1. call(): Invokes a function immediately with a specified 'this' value and
 *           arguments provided individually.
 *
 * 2. apply(): Invokes a function immediately with a specified 'this' value and
 *            arguments provided as an array.
 *
 * 3. bind(): Returns a new function with a specified 'this' value and
 *           optional arguments, which can be invoked later.
 */

let obj1 = {
  fname: "vikas",
  age: 25,
  print: function (city) {
    console.log(this.fname, this.age, city);
  },
};

let obj2 = {
  fname: "akash",
  age: 20,
};

/* ==========================================
   Using call()
   ==========================================
   Syntax: func.call(thisArg, arg1, arg2, ...)
*/
// console.log("--- call() ---");
// obj1.print.call(obj2, "agra");

/* ==========================================
   Using apply()
   ==========================================
   Syntax: func.apply(thisArg, [argsArray])
*/
// console.log("--- apply() ---");
// obj1.print.apply(obj2, ["agra"]);

/* ==========================================
   Using bind()
   ==========================================
   Syntax: const newFunc = func.bind(thisArg, arg1, arg2, ...)
*/
// console.log("--- bind() ---");
// let boundFunc = obj1.print.bind(obj2, "agra");
// boundFunc();

// Note: Lines below were from original file for reference
// obj1.print(obj2);
// obj1.print.call(obj2, "agra");
// obj1.print.apply(obj2, ["agra"]);
// obj1.print.bind(obj2, ["agra"])();
