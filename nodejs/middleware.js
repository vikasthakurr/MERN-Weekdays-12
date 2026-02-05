/*
  -----------------------------------------------------------------------------
  Middleware in Express.js:
  -----------------------------------------------------------------------------
  - Middleware functions are functions that have access to the request object (req), 
    the response object (res), and the next middleware function in the application’s 
    request-response cycle.
  - The next middleware function is commonly denoted by a variable named `next`.

  Key Responsibilities of Middleware:
  1. Execute any code.
  2. Make changes to the request and the response objects.
  3. End the request-response cycle.
  4. Call the next middleware function in the stack.

  Types of Middleware:
  1. Application-level middleware (bound to `app` object like `app.use()`).
  2. Router-level middleware (bound to `express.Router()`).
  3. Error-handling middleware (takes 4 arguments: `err, req, res, next`).
  4. Built-in middleware (e.g., `express.json()`, `express.static()`).
  5. Third-party middleware (e.g., `multer`, `morgan`, `cors`).

  The `next()` Function:
  - If the current middleware function does not end the request-response cycle, 
    it must call `next()` to pass control to the next middleware function. 
    Otherwise, the request will be left hanging.
*/

import express from "express"; // Importing Express framework
import fs from "fs"; // Importing File System module
import { json } from "stream/consumers";
import multer from "multer"; // Importing Multer for handling file uploads

const PORT = 3000;
const app = express();

// Built-in Middleware:
// Parses incoming JSON requests and puts the parsed data in `req.body`
app.use(express.json());

// Built-in Middleware:
// Parses incoming requests with urlencoded payloads (e.g. form data)
app.use(express.urlencoded({ extended: true }));

// ----------------------------------------------------------------------------
// Multer Configuration (Third-party Middleware):
// ----------------------------------------------------------------------------
// 'multer' is used for handling multipart/form-data, primarily for uploading files.
// We configure 'storage' to define where and how files are saved.

const storage = multer.diskStorage({
  // Destination: where to store the uploaded files
  destination: function (req, file, cb) {
    // cb(error, destination_folder)
    cb(null, "uploads/");

    // Note: The following lines in the original code seem to be logic for filename generation
    // but placed inside destination? Usually, this belongs in filename or is just extra logic.
    // Ideally, destination just sets the folder.
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // This line seems to calculate a suffix but doesn't use it for destination path.
    // The second cb call here might be incorrect if intended for destination.
    // Kept as per original logic but usually destination only calls cb once.
    // cb(null, file.fieldname + "-" + uniqueSuffix);
  },
  // Filename: how to name the uploaded file
  filename: function (req, file, cb) {
    // cb(error, filename)
    // using Date.now() to ensure unique filenames
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// ----------------------------------------------------------------------------
// Custom Middleware Examples (Application-level):
// ----------------------------------------------------------------------------

// Example 1: Authentication Middleware (Commented out)
/*
app.use((req, res, next) => {
    let username = "vikas";
    let password = "1234";
    let role = "admin";
    
    // Check if request credentials match
    if (
        req.body.username === username &&
        req.body.password === password &&
        req.body.role === role
    ) {
        // Log the user data to a file
        fs.writeFile("./user.text", JSON.stringify(req.body), (err) => {
            if (err) {
                console.log(err);
            }
        });
        // Pass control to the next middleware/route handler
        next();
    } else {
        // End the cycle if credentials are invalid
        res.end("invalid credentials");
    }
});
*/

// Example 2: Simple Logger Middleware (Commented out)
/*
app.use((req, res, next) => {
  console.log("middleware 2 called");
  next();
});
*/

// ----------------------------------------------------------------------------
// Routes:
// ----------------------------------------------------------------------------

app.get("/", (req, res) => {
  res.end("hello from home page");
});

app.post("/user", (req, res) => {
  res.end("hello from user page");
});

// Route with Multer Middleware:
// 'upload.single("dp")' is the middleware that handles a single file upload
// from the field named "dp".
app.post("/upload", upload.single("dp"), (req, res) => {
  // req.file contains information about the uploaded file
  // req.body contains the text fields from the form
  res.status(201).send({ message: "media uploaded successfully" });
});

// Implementation for dealing with multiple files
// 'upload.array("photos", 12)' would handle multiple files
app.post("/reg", (req, res) => {
  res.end("reg success");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
