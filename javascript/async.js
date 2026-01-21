/*
 * ========================================
 * ASYNC/AWAIT in JavaScript
 * ========================================
 *
 * WHAT IS ASYNC/AWAIT?
 * -------------------
 * Async/Await is a modern syntax introduced in ES2017 (ES8) that allows us to write
 * asynchronous code in a more synchronous, readable manner. It's built on top of Promises
 * and provides a cleaner way to handle asynchronous operations without chaining .then() calls.
 *
 * KEY CONCEPTS:
 *
 * 1. ASYNC KEYWORD:
 *    - The 'async' keyword is placed before a function declaration
 *    - It transforms a regular function into an asynchronous function
 *    - An async function ALWAYS returns a Promise
 *    - If the function returns a non-Promise value, JavaScript automatically wraps it in a resolved Promise
 *
 *    Syntax: async function functionName() { ... }
 *
 * 2. AWAIT KEYWORD:
 *    - The 'await' keyword can ONLY be used inside async functions
 *    - It pauses the execution of the async function until the Promise is resolved or rejected
 *    - It extracts the resolved value from the Promise
 *    - It makes asynchronous code look and behave like synchronous code
 *    - While 'await' pauses the function, it doesn't block the main thread (non-blocking)
 *
 * HOW IT WORKS:
 * ------------
 * When JavaScript encounters an 'await' keyword:
 * 1. It pauses the execution of the async function
 * 2. It waits for the Promise to settle (resolve or reject)
 * 3. Once settled, it resumes execution and returns the resolved value
 * 4. If the Promise is rejected, it throws an error (which can be caught with try-catch)
 *
 * ADVANTAGES OVER PROMISES:
 * ------------------------
 * ✓ More readable and easier to understand (looks like synchronous code)
 * ✓ Easier error handling with try-catch blocks (instead of .catch())
 * ✓ Easier debugging (better stack traces)
 * ✓ Avoids "callback hell" and "promise chaining"
 * ✓ Better for handling multiple asynchronous operations in sequence
 *
 * ERROR HANDLING:
 * --------------
 * - Use try-catch blocks to handle errors in async/await
 * - All errors (both synchronous and asynchronous) can be caught in the catch block
 * - This provides a unified error handling mechanism
 *
 * IMPORTANT NOTES:
 * ---------------
 * - 'await' only works inside 'async' functions (except at the top level in modules)
 * - An async function always returns a Promise, even if you don't explicitly return one
 * - You can use 'await' with any function that returns a Promise
 * - Multiple 'await' statements execute sequentially (one after another)
 * - For parallel execution of independent operations, use Promise.all()
 *
 * COMMON USE CASES:
 * ----------------
 * - API calls (fetch, axios, etc.)
 * - Database operations
 * - File system operations
 * - Any operation that returns a Promise
 */

// ========================================
// EXAMPLE 1: PROMISE-BASED APPROACH (OLD WAY)
// ========================================
// This example shows how we used to handle asynchronous operations using .then() chains
// While this works, it can become difficult to read with multiple operations

// function fetchData(url) {
//   fetch(url)
//     .then((response) => response.json())  // .then() chains the next operation
//     .then((data) => {
//       console.log(data);  // Handle the final data
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);  // Handle any errors in the chain
//     });
// }

// fetchData("https://jsonplaceholder.typicode.com/todos/1");

// ========================================
// EXAMPLE 2: ASYNC/AWAIT APPROACH (MODERN WAY)
// ========================================
// This is the same functionality as above, but using async/await
// Notice how much cleaner and easier to read this code is!

// The 'async' keyword here declares this as an asynchronous function
// This function will ALWAYS return a Promise, even without an explicit return statement
async function fetchData(url) {
  // try-catch block handles any errors that occur during the async operations
  // This is much cleaner than using .catch() with Promises
  try {
    // AWAIT #1: Pause here and wait for the fetch() Promise to resolve
    // 'fetch(url)' returns a Promise that resolves to a Response object
    // The 'await' keyword extracts the Response object from the Promise
    // The function execution pauses at this line until the network request completes
    const response = await fetch(url);

    // Check if the HTTP response status is OK (status code 200-299)
    // response.ok is a boolean property that indicates success
    if (!response.ok) {
      console.log("something went wrong");
    }

    // AWAIT #2: Pause here and wait for the response.json() Promise to resolve
    // '.json()' is an asynchronous method that parses the response body as JSON
    // It returns a Promise that resolves to the parsed JavaScript object
    // Again, 'await' extracts the actual data from the Promise
    const data = await response.json();

    // Now we have the actual data, and we can use it directly
    // No need for .then() chaining!
    console.log(data);
  } catch (err) {
    // This catch block will handle ANY error that occurs in the try block:
    // - Network errors from fetch()
    // - JSON parsing errors from .json()
    // - Any other synchronous errors
    console.log(err);
  }
}

// Call the async function
// This returns a Promise, but we're not handling it here (we're just letting it run)
// The function executes asynchronously - it won't block the rest of the code
fetchData("https://jsonplaceholder.typicode.com/todos/1");

setTimeout(() => {
  console.log("waiting");
  setTimeout(() => {
    console.log("waiting");
  }, 2000);
}, 5000);

console.log("hi");
