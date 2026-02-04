/*
===============================================
FILE SYSTEM (fs) MODULE IN NODE.JS
===============================================

What is the fs Module?
----------------------
- The 'fs' (File System) module allows you to work with the file system on your computer.
- It provides methods to create, read, update, delete, and rename files.
- To use it, we must first import it.

Synchronous vs Asynchronous Operations:
---------------------------------------
Node.js supports two types of file system operations:

1. Synchronous (Blocking):
   - Method names end with 'Sync' (e.g., writeFileSync).
   - The code waits for the operation to finish before moving to the next line.
   - It blocks the "Main Thread / Event Loop".
   - NOT recommended for busy servers as it halts execution.

2. Asynchronous (Non-Blocking):
   - Method names do NOT have 'Sync' (e.g., writeFile).
   - They use a Callback function (err, result) => {}.
   - The code continues to execute while the file operation happens in the background.
   - The callback is fired when the operation is complete.
   - Recommended for performance.

*/

import fs from "fs";

// ===============================================
// 1. WRITE - Creating a new file (or overwriting)
// ===============================================

// -----------------------------------------------
// A. Synchronous Write (Blocking)
// -----------------------------------------------
/*
Syntax: fs.writeFileSync(path, data, options)
- path: File name/path defined as string.
- data: Content to write.
- If file doesn't exist, it creates it.
- If file exists, it OVERWRITES the content.
*/
// fs.writeFileSync("example.txt", "This is a synchronous file creation.");
// console.log("File created strictly (Sync)");

// -----------------------------------------------
// B. Asynchronous Write (Non-Blocking)
// -----------------------------------------------
/*
Syntax: fs.writeFile(path, data, callback)
- callback: A function that runs once the operation is done.
- callback takes one argument: (err).
*/
// fs.writeFile("async_example.txt", "This is an asynchronous file creation.", (err) => {
//   if (err) {
//     console.log("Error writing file:", err);
//   } else {
//     console.log("File created successfully (Async)");
//   }
// });
// console.log("This prints BEFORE the file is finished writing because async is non-blocking!");

// ===============================================
// 2. READ - Reading file content
// ===============================================

// -----------------------------------------------
// A. Synchronous Read (Blocking)
// -----------------------------------------------
/*
Syntax: fs.readFileSync(path, encoding)
- If encoding is 'utf-8', it returns a string.
- If encoding is missing, it returns a "Buffer" (binary data).
*/
// const fileContent = fs.readFileSync("example.txt", "utf-8");
// console.log("File Content (Sync):", fileContent);

// -----------------------------------------------
// B. Asynchronous Read (Non-Blocking)
// -----------------------------------------------
/*
Syntax: fs.readFile(path, encoding, callback)
- callback: (err, data)
- If we don't specify "utf-8", we get a Buffer.
*/
// fs.readFile("async_example.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//   } else {
//     console.log("File Content (Async):", data);
//   }
// });

// ===============================================
// 3. UPDATE - Appending data to a file
// ===============================================

// -----------------------------------------------
// A. Synchronous Append (Blocking)
// -----------------------------------------------
/*
Syntax: fs.appendFileSync(path, data)
- Adds data to the END of the file.
- Does not delete existing content.
*/
// fs.appendFileSync("example.txt", "\nThis is a new line added synchronously.");
// console.log("Data appended (Sync)");

// -----------------------------------------------
// B. Asynchronous Append (Non-Blocking)
// -----------------------------------------------
/*
Syntax: fs.appendFile(path, data, callback)
*/
// fs.appendFile("async_example.txt", "\nThis is a new line added asynchronously.", (err) => {
//   if (err) {
//     console.log("Error appending file:", err);
//   } else {
//     console.log("Data appended (Async)");
//   }
// });

// ===============================================
// 4. DELETE - Removing a file
// ===============================================

// -----------------------------------------------
// A. Synchronous Delete (Blocking)
// -----------------------------------------------
/*
Syntax: fs.unlinkSync(path)
- Deletes the file immediately.
- Throws error if file doesn't exist (unless handled with try-catch).
*/
// try {
//   fs.unlinkSync("example.txt");
//   console.log("File deleted (Sync)");
// } catch (err) {
//   console.log("Error deleting file:", err);
// }

// -----------------------------------------------
// B. Asynchronous Delete (Non-Blocking)
// -----------------------------------------------
/*
Syntax: fs.unlink(path, callback)
*/
// fs.unlink("async_example.txt", (err) => {
//   if (err) {
//     console.log("Error deleting file:", err);
//   } else {
//     console.log("File deleted (Async)");
//   }
// });
