/*
  ==============================================================
  JAVASCRIPT CALLBACKS & HIGHER-ORDER FUNCTIONS
  ==============================================================

  1. CALLBACK FUNCTIONS
  --------------------------------------------------------------
  - A callback is a function passed as an argument to another function.
  - It "calls back" or executes after the outer function has finished 
    its task.
  - Callbacks can be synchronous or asynchronous.

  2. HIGHER-ORDER FUNCTIONS (HOF)
  --------------------------------------------------------------
  - A HOF is a function that either:
    a) Takes one or more functions as arguments (callbacks).
    b) Returns a function as its result.

  3. SYNCHRONOUS vs ASYNCHRONOUS CALLBACKS
  --------------------------------------------------------------
  - Synchronous: Executed immediately and sequentially (e.g., Array.map, Array.forEach).
  - Asynchronous: Executed after an async operation (e.g., setTimeout, API requests).

  4. CALLBACK HELL (Pyramid of Doom)
  --------------------------------------------------------------
  - Occurs when multiple asynchronous operations are dependent on each 
    other, leading to deeply nested callbacks.
  - Makes code hard to read, maintain, and debug.
  - Modern solution: Promises and Async/Await.
*/

// --- BASIC CALLBACK EXAMPLE ---

// function mail(to, sub, body) {
//   console.log(
//     `mail has been sent to ${to} with subject ${sub} with body ${body}`
//   );
// }

// function mail(to) {
//   return function (sub) {
//     return function (body) {
//       console.log(
//         `mail has been sent to ${to} with sub ${sub} with body ${body}`
//       );
//     };
//   };
// }

// // mail("abc@gmail.com", "welcome to order");
// mail("ordered")("s24 ordered");

function sayHi(name, cb) {
  console.log(`hi ${name}`);
  cb();
}

function bye() {
  console.log("bye");
}

// sayHi("vikas", bye);
// sayHi("vikas");
// bye();

function makeMaggi(raw, cb) {
  console.log("start making maggi");
  //   cb();
}
function waterBoil(cb) {
  console.log("water boiled");
  cb();
}
function finalStep(cb) {
  console.log("final step done maggi ready");
  cb();
}

// --- CALLBACK HELL (Nested Callbacks) ---
/*
  The following example demonstrates Callback Hell, where multiple 
  asynchronous-like steps are nested inside each other.
*/
makeMaggi("hakka", () => {
  waterBoil(() => {
    finalStep(() => {
      console.log("please eat maggi");
    });
  });
});
