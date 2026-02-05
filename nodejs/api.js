/*
  -----------------------------------------------------------------------------
  API (Application Programming Interface):
  -----------------------------------------------------------------------------
  - An API is a mechanism that enables two software components to communicate 
    with each other using a set of definitions and protocols.
  - Example: Think of a waiter in a restaurant. You (the client) give your order 
    to the waiter (the interface), who takes it to the kitchen (the server). 
    The kitchen prepares the food, and the waiter brings it back to you.

  -----------------------------------------------------------------------------
  REST API (Representational State Transfer):
  -----------------------------------------------------------------------------
  - REST is an architectural style for building web services.
  - It treats data as "resources" (e.g., users, posts, products) that can be 
    accessed via standard HTTP methods.
  - Key Principles:
    1. Stateless: The server does not store client state between requests.
    2. Client-Server: Separation of concerns between the UI and data storage.
    3. Cacheable: Responses can be cached to improve performance.

  -----------------------------------------------------------------------------
  HTTP Methods & CRUD Operations:
  -----------------------------------------------------------------------------
  Rest APIs map CRUD (Create, Read, Update, Delete) operations to HTTP methods:
  
  1. GET    -> Read   : Retrieve data from the server.
  2. POST   -> Create : Send data to create a new resource.
  3. PUT    -> Update : Update an entire resource.
  4. PATCH  -> Update : Update specific fields of a resource.
  5. DELETE -> Delete : Remove a resource from the server.
*/

import express from "express"; // Importing the Express framework
import fs from "fs"; // Importing File System module (built-in)
import ejs from "ejs"; // Importing EJS (Embedded JavaScript) templating engine

const PORT = 3000; // Defining the port number
const app = express(); // Initializing the Express application instance

// View Engine Setup:
// Configure Express to use EJS for rendering dynamic HTML pages
app.set("view engine", "ejs");
app.set("views", "views"); // Specify the folder where .ejs files are stored

// Middleware:
// express.json() is a built-in middleware that parses incoming requests with JSON payloads.
// It allows us to access request data via 'req.body'.
app.use(express.json());

// API Routes

/**
 * GET "/"
 * - Purpose: Fetch the home page content
 * - Method: GET (Read operation)
 */
app.get("/", (req, res) => {
  res.send("hello from home page"); // Sends a plain text response
});

/**
 * GET "/about"
 * - Purpose: Render the About page view
 * - Method: GET (Read operation)
 */
app.get("/about", (req, res) => {
  // Renders the 'about.ejs' file from the 'views' folder
  res.render("about");
});

/**
 * POST "/login"
 * - Purpose: Handle user login
 * - Method: POST (Create/Send data operation)
 * - Receives data in req.body
 */
app.post("/login", (req, res) => {
  console.log(req.body); // Logs the received JSON data to the console
  res.end("request success"); // Ends the response without sending further data
});

// Server Listener
// Starts the server and listens for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
