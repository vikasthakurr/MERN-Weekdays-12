/**
 * ================================
 * THIRD-PARTY MODULES IN NODE.JS
 * ================================
 *
 * Third-party modules are packages created by the community and available through npm (Node Package Manager).
 * Unlike built-in modules (fs, path, http), these need to be installed before use.
 *
 * Installation: npm install package-name
 * Import: import packageName from "package-name";  OR  const packageName = require("package-name");
 *
 * Benefits:
 * - Save development time by using pre-built solutions
 * - Community-tested and maintained code
 * - Access to specialized functionality
 * - Regular updates and bug fixes
 */

/**
 * ================================
 * FIGLET MODULE - ASCII Art Generator
 * ================================
 *
 * figlet is a third-party module that creates ASCII art from text.
 * It's useful for creating stylish console output, banners, or decorative text.
 *
 * Installation: npm install figlet
 *
 * Usage Pattern:
 * figlet(text, callback)
 * figlet(text, options, callback)
 *
 * The callback follows Node.js error-first callback convention:
 * - First parameter: error (if any)
 * - Second parameter: result data
 *
 * Example output for "Hello":
 *  _   _      _ _
 * | | | | ___| | | ___
 * | |_| |/ _ \ | |/ _ \
 * |  _  |  __/ | | (_) |
 * |_| |_|\___|_|_|\___/
 */

// Importing the figlet module (third-party module - needs npm install figlet)
// import figlet from "figlet";

// Using figlet to create ASCII art
// figlet("Hello Vikas", function (err, data) {
//   // Error-first callback pattern - check for errors first
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err); // Display error details
//     return; // Exit if error occurs
//   }
//   // If no error, display the ASCII art
//   console.log(data);
// });

/**
 * ================================
 * CUSTOM MODULE EXPORTS (Review)
 * ================================
 */

// Example functions that could be exported
// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// Default export - exporting an object containing both functions
// export default { sum, sub };

// Alternative: Named exports
// sum(10, 20);
// export { sum };

/**
 * ================================
 * BUILT-IN FS (FILE SYSTEM) MODULE
 * ================================
 *
 * The 'fs' module is a built-in Node.js module for working with the file system.
 * No installation needed - it comes with Node.js.
 *
 * Import: import fs from "fs";  OR  const fs = require("fs");
 *
 * Two Types of Operations:
 *
 * 1. SYNCHRONOUS (Sync) - Blocking Operations
 *    - Method names end with 'Sync' (e.g., writeFileSync, readFileSync)
 *    - Blocks code execution until operation completes
 *    - Returns result directly or throws error
 *    - Simpler code, but can freeze your application
 *    - Good for: Startup scripts, small files, CLI tools
 *
 * 2. ASYNCHRONOUS (Async) - Non-Blocking Operations
 *    - Method names without 'Sync' (e.g., writeFile, readFile)
 *    - Doesn't block code execution
 *    - Uses callbacks, promises, or async/await
 *    - Better performance for servers and large files
 *    - Good for: Web servers, large files, production apps
 *
 * Common FS Operations:
 * - writeFile/writeFileSync: Create or overwrite a file
 * - appendFile/appendFileSync: Add content to existing file
 * - readFile/readFileSync: Read file contents
 * - unlink/unlinkSync: Delete a file
 * - mkdir/mkdirSync: Create a directory
 * - readdir/readdirSync: Read directory contents
 */

// Importing the built-in fs module
import fs from "fs";
// console.log(fs); // Uncomment to see all available fs methods

/**
 * ================================
 * WRITE OPERATION
 * ================================
 *
 * Creates a new file or OVERWRITES an existing file with new content.
 * WARNING: If file exists, all previous content will be lost!
 *
 * Synchronous: fs.writeFileSync(path, data, options)
 * Asynchronous: fs.writeFile(path, data, options, callback)
 */

// ===== WRITE FILE - SYNCHRONOUS =====
// Blocks execution until file is written
// fs.writeFileSync("./vikas.text", "hii vikas");
// fs.writeFileSync("abc.pdf", "this is pdf");

/**
 * SYNCHRONOUS WRITE - Detailed Example:
 *
 * try {
 *   fs.writeFileSync("./example.txt", "This is my content");
 *   console.log("File written successfully!");
 * } catch (err) {
 *   console.error("Error writing file:", err);
 * }
 */

/**
 * ===== WRITE FILE - ASYNCHRONOUS =====
 *
 * Non-blocking version using callback
 *
 * fs.writeFile("./vikas.text", "hii vikas", (err) => {
 *   if (err) {
 *     console.log("Error writing file:", err);
 *   } else {
 *     console.log("File written successfully!");
 *   }
 * });
 *
 * OR using Promises (fs.promises):
 *
 * import fs from "fs/promises";
 * try {
 *   await fs.writeFile("./vikas.text", "hii vikas");
 *   console.log("File written successfully!");
 * } catch (err) {
 *   console.error("Error:", err);
 * }
 */

/**
 * ================================
 * APPEND OPERATION
 * ================================
 *
 * Adds content to the END of an existing file without deleting previous content.
 * If file doesn't exist, it creates a new file (like writeFile).
 *
 * Synchronous: fs.appendFileSync(path, data, options)
 * Asynchronous: fs.appendFile(path, data, options, callback)
 */

// ===== APPEND FILE - ASYNCHRONOUS =====
// Non-blocking append operation with callback
// Note: The callback parameters should be (err) not (data, err)
// fs.appendFile("./vikas.text", "\n this is is updated content 2", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file updated");
//   }
// });

/**
 * ===== APPEND FILE - SYNCHRONOUS =====
 *
 * Blocking version - waits until append is complete
 *
 * try {
 *   fs.appendFileSync("./vikas.text", "\nNew line added");
 *   console.log("Content appended successfully!");
 * } catch (err) {
 *   console.error("Error appending:", err);
 * }
 */

/**
 * APPEND vs WRITE:
 * - writeFile: REPLACES all content (destructive)
 * - appendFile: ADDS to existing content (preserves data)
 */

/**
 * ================================
 * UNLINK OPERATION (DELETE FILE)
 * ================================
 *
 * Deletes a file from the file system.
 * WARNING: This action is permanent and cannot be undone!
 *
 * Synchronous: fs.unlinkSync(path)
 * Asynchronous: fs.unlink(path, callback)
 */

// ===== UNLINK FILE - SYNCHRONOUS =====
// Blocks execution until file is deleted
// fs.unlinkSync("./abc.pdf");

/**
 * SYNCHRONOUS UNLINK - Detailed Example:
 *
 * try {
 *   fs.unlinkSync("./abc.pdf");
 *   console.log("File deleted successfully!");
 * } catch (err) {
 *   console.error("Error deleting file:", err);
 *   // Common error: ENOENT - file doesn't exist
 * }
 */

/**
 * ===== UNLINK FILE - ASYNCHRONOUS =====
 *
 * Non-blocking deletion with callback
 *
 * fs.unlink("./abc.pdf", (err) => {
 *   if (err) {
 *     console.error("Error deleting file:", err);
 *   } else {
 *     console.log("File deleted successfully!");
 *   }
 * });
 *
 * OR using Promises:
 *
 * import fs from "fs/promises";
 * try {
 *   await fs.unlink("./abc.pdf");
 *   console.log("File deleted!");
 * } catch (err) {
 *   console.error("Error:", err);
 * }
 */

/**
 * ================================
 * READ OPERATION
 * ================================
 *
 * Reads the contents of a file and returns it.
 * By default, returns a Buffer; specify 'utf8' encoding for string output.
 *
 * Synchronous: fs.readFileSync(path, options)
 * Asynchronous: fs.readFile(path, options, callback)
 */

/**
 * ===== READ FILE - SYNCHRONOUS =====
 *
 * Blocks execution until file is read
 * Returns the file content directly
 *
 * try {
 *   const data = fs.readFileSync("./vikas.text", "utf8");
 *   console.log("File contents:", data);
 * } catch (err) {
 *   console.error("Error reading file:", err);
 * }
 *
 * Without encoding (returns Buffer):
 * const buffer = fs.readFileSync("./vikas.text");
 * console.log(buffer); // <Buffer 68 69 69 20 76 69 6b 61 73>
 * console.log(buffer.toString()); // Converts buffer to string
 */

/**
 * ===== READ FILE - ASYNCHRONOUS =====
 *
 * Non-blocking read operation with callback
 *
 * fs.readFile("./vikas.text", "utf8", (err, data) => {
 *   if (err) {
 *     console.error("Error reading file:", err);
 *     return;
 *   }
 *   console.log("File contents:", data);
 * });
 *
 * OR using Promises:
 *
 * import fs from "fs/promises";
 * try {
 *   const data = await fs.readFile("./vikas.text", "utf8");
 *   console.log("File contents:", data);
 * } catch (err) {
 *   console.error("Error:", err);
 * }
 */

/**
 * ================================
 * SYNC vs ASYNC - WHEN TO USE WHAT?
 * ================================
 *
 * Use SYNCHRONOUS when:
 * ✓ Running startup/configuration scripts
 * ✓ Building CLI tools
 * ✓ Code simplicity is priority
 * ✓ Working with small files
 * ✗ NOT for web servers or real-time apps
 *
 * Use ASYNCHRONOUS when:
 * ✓ Building web servers or APIs
 * ✓ Handling multiple users/requests
 * ✓ Working with large files
 * ✓ Performance is critical
 * ✓ Production applications
 *
 * PERFORMANCE COMPARISON:
 *
 * Synchronous (Blocking):
 * Read file 1 → Wait → Done → Read file 2 → Wait → Done
 * Total time: 2 seconds
 *
 * Asynchronous (Non-Blocking):
 * Read file 1 → Read file 2 → Both done together
 * Total time: 1 second
 */

/**
 * ================================
 * COMPLETE EXAMPLES - ALL OPERATIONS
 * ================================
 */

/**
 * EXAMPLE 1: Blog Post Manager (Synchronous)
 *
 * // Create a new blog post
 * fs.writeFileSync("./blog-post.txt", "# My First Blog\n\nHello World!");
 *
 * // Add a new paragraph
 * fs.appendFileSync("./blog-post.txt", "\n\nThis is additional content.");
 *
 * // Read and display the blog post
 * const content = fs.readFileSync("./blog-post.txt", "utf8");
 * console.log(content);
 *
 * // Delete the blog post
 * fs.unlinkSync("./blog-post.txt");
 */

/**
 * EXAMPLE 2: Log File Manager (Asynchronous)
 *
 * // Create initial log file
 * fs.writeFile("./app.log", "App started at " + new Date(), (err) => {
 *   if (err) throw err;
 *   console.log("Log file created!");
 *
 *   // Append new log entry
 *   fs.appendFile("./app.log", "\nUser logged in", (err) => {
 *     if (err) throw err;
 *     console.log("Log updated!");
 *
 *     // Read entire log
 *     fs.readFile("./app.log", "utf8", (err, data) => {
 *       if (err) throw err;
 *       console.log("Log contents:", data);
 *
 *       // Clean up - delete log file
 *       fs.unlink("./app.log", (err) => {
 *         if (err) throw err;
 *         console.log("Log file deleted!");
 *       });
 *     });
 *   });
 * });
 */

/**
 * EXAMPLE 3: Modern Async/Await Approach
 *
 * import fs from "fs/promises";
 *
 * async function manageFiles() {
 *   try {
 *     // Write
 *     await fs.writeFile("./data.txt", "Initial content");
 *
 *     // Append
 *     await fs.appendFile("./data.txt", "\nMore content");
 *
 *     // Read
 *     const data = await fs.readFile("./data.txt", "utf8");
 *     console.log(data);
 *
 *     // Delete
 *     await fs.unlink("./data.txt");
 *     console.log("All operations completed!");
 *
 *   } catch (err) {
 *     console.error("Error:", err);
 *   }
 * }
 *
 * manageFiles();
 */

// import fs from "fs";
// const data = fs.readFileSync("./vikas.text", "utf-8");
// console.log(data);

// fs.readFile("./vikas.text", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

// let name:String ="vikas";

// function abc:any:(){
//     return name
// }

// let name;

// function abc() {
//   return 2;
// }
