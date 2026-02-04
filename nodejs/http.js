/*
===============================================
HTTP MODULE - CREATING SERVER IN NODE.JS
===============================================

What is the HTTP Module?
------------------------
- The 'http' module is a built-in Node.js module that allows you to create HTTP servers and clients
- It provides low-level access to HTTP protocol functionality
- No external dependencies required - it comes with Node.js
- Gives you full control over request/response handling

Key Concepts:
-------------
1. HTTP Server: A server that listens for HTTP requests and sends HTTP responses
2. Request Object (req): Contains information about the incoming HTTP request
3. Response Object (res): Used to send data back to the client

How to Create a Server with HTTP Module:
----------------------------------------
Step 1: Import the HTTP module
*/
// import http from "http";

/*
Step 2: Define the PORT number where server will listen
- Common ports: 3000, 8080, 5000 for development
- Port 80 is the default for HTTP (requires admin privileges)
- Port 443 is the default for HTTPS
*/
// const PORT = 3000;

/*
Step 3: Create the server using http.createServer()
- createServer() accepts a callback function (request handler)
- The callback is executed every time a request is received
- Callback receives two parameters:
  * req (request): Contains request data (URL, method, headers, body, etc.)
  * res (response): Used to send response back to client
*/
// const server = http.createServer((req, res) => {

/*
Request Object (req) Properties:
--------------------------------
- req.method: HTTP method (GET, POST, PUT, DELETE, etc.)
- req.url: The URL path requested (e.g., "/about", "/contact")
- req.headers: Object containing all HTTP headers sent by client
- req.body: Request payload (needs parsing middleware)
*/
//   //   console.log(req.method);    // e.g., "GET"
//   //   console.log(req.url);       // e.g., "/about"
//   //   console.log(req.headers);   // e.g., { 'user-agent': 'Mozilla/5.0...', ... }

/*
Response Object (res) Properties & Methods:
------------------------------------------
- res.statusCode: Set HTTP status code (200, 404, 500, etc.)
- res.setHeader(): Set HTTP response headers
- res.end(): Send the response and close the connection
- res.write(): Write data to the response (can be called multiple times)
*/
//   //   res.statusCode = 404;                    // Set status code
//   //   res.setHeader("MyName", "Vikas");        // Custom header
//   //   res.setHeader("Content-Type", "Html");   // Content type header
//   //   res.end("hello world");                  // Send response and end

/*
Routing with HTTP Module:
-------------------------
- Manual routing using if-else statements
- Check req.url to determine which page to serve
- This is basic and becomes complex for larger applications
*/
//   if (req.url === "/") {
//     res.end("hello from home page");
//   } else if (req.url === "/about") {
//     res.end("hello from about page");
//   } else if (req.url === "/contact") {
//     res.end("hello from contact page");
//   }
// });

/*
Step 4: Start the server with server.listen()
- listen() binds the server to a specific port
- Takes port number and optional callback function
- Callback executes when server starts successfully
*/
// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });

/*
Limitations of HTTP Module:
---------------------------
1. Manual routing becomes complex with many routes
2. No built-in middleware support
3. Manual parsing of request body, cookies, etc.
4. More boilerplate code required
5. Harder to organize large applications

This is where Express.js comes in to solve these problems!


===============================================
EXPRESS.JS - MODERN WEB FRAMEWORK FOR NODE.JS
===============================================

What is Express.js?
-------------------
- Express is a minimal and flexible Node.js web application framework
- Built on top of the HTTP module, but provides easier and cleaner API
- Most popular Node.js framework for building web applications and APIs
- Provides robust features for web and mobile applications

Why Use Express Instead of HTTP Module?
---------------------------------------
1. Simplified Routing: Clean, organized route definitions
2. Middleware Support: Easy to add functionality like parsing, authentication
3. Better Request/Response Handling: More methods and utilities
4. Template Engine Support: For server-side rendering
5. Less Boilerplate: Write less code to achieve the same functionality
6. Better Error Handling: Built-in error handling mechanisms
7. Large Ecosystem: Thousands of middleware packages available

Installation:
------------
npm install express

How to Create a Server with Express:
------------------------------------
*/

//Step 1: Import Express
// import express from "express";

/*
Step 2: Create an Express application instance
- express() returns an Express application object
- This object has methods for routing, middleware, and configuration
*/
// const server = express();

/*
Step 3: Define the PORT
*/
// const PORT = 3000;

/*
Step 4: Define Routes using HTTP method functions
- Express provides methods for all HTTP verbs: get(), post(), put(), delete(), patch()
- Syntax: server.METHOD(PATH, HANDLER)
  * METHOD: HTTP method (get, post, etc.)
  * PATH: Route path (string, regex, or pattern)
  * HANDLER: Callback function (req, res) => { }

Route Handler Parameters:
------------------------
- req: Enhanced request object with additional properties & methods
- res: Enhanced response object with additional methods

Express Request Object (req) Additional Features:
-------------------------------------------------
- req.params: URL parameters (e.g., /user/:id -> req.params.id)
- req.query: Query string parameters (e.g., /search?name=john -> req.query.name)
- req.body: Parsed request body (requires middleware like express.json())
- req.cookies: Cookies sent by client (requires cookie-parser middleware)
- req.get(): Get request header value

Express Response Object (res) Methods:
--------------------------------------
- res.send(): Send response of various types (string, object, buffer, array)
- res.json(): Send JSON response (automatically sets Content-Type)
- res.status(): Set HTTP status code (chainable)
- res.sendFile(): Send a file as response
- res.redirect(): Redirect to another URL
- res.render(): Render a view template
- res.set(): Set response headers
*/

// Example route - Commented out
// server.get("/", (req, res) => {
//   res.send("hello from home page");
// });

/*
Active Routes:
-------------
Define multiple routes for different paths
*/
server.get("/about", (req, res) => {
  res.send("hello from about page");
});

server.get("/signup", (req, res) => {
  res.send("hello from signup page");
});

/*
Step 5: Start the Express Server
- Similar to HTTP module, use listen() to start server
- Express listen() is a wrapper around Node's http.Server.listen()
*/
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

/*
===============================================
COMPARISON: HTTP MODULE vs EXPRESS
===============================================

Feature                 | HTTP Module          | Express
-----------------------|----------------------|------------------
Routing                | Manual if-else       | Built-in methods
Middleware             | Not available        | Excellent support
Request parsing        | Manual               | Middleware available
Code complexity        | More boilerplate     | Clean & concise
Learning curve         | Moderate             | Easy
Performance            | Slightly faster      | Negligible difference
Community & ecosystem  | Limited              | Very large

===============================================
ADDITIONAL EXPRESS FEATURES TO EXPLORE:
===============================================

1. Middleware:
   - app.use(express.json())           // Parse JSON request bodies
   - app.use(express.urlencoded())     // Parse URL-encoded bodies
   - app.use(express.static('public')) // Serve static files

2. Route Parameters:
   server.get('/user/:id', (req, res) => {
     const userId = req.params.id;
     res.send(`User ID: ${userId}`);
   });

3. Query Parameters:
   server.get('/search', (req, res) => {
     const term = req.query.q;
     res.send(`Search term: ${term}`);
   });

4. HTTP Methods:
   server.post('/api/users', (req, res) => { })    // Create
   server.get('/api/users', (req, res) => { })     // Read
   server.put('/api/users/:id', (req, res) => { }) // Update
   server.delete('/api/users/:id', (req, res) => {}) // Delete

5. Error Handling:
   server.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Something broke!');
   });

6. Router:
   import { Router } from 'express';
   const router = Router();
   router.get('/profile', (req, res) => { });
   server.use('/user', router); // Mounts at /user/profile

Best Practices:
--------------
1. Use environment variables for PORT (process.env.PORT)
2. Organize routes in separate files for larger applications
3. Use middleware for common functionality (logging, authentication)
4. Implement proper error handling
5. Use async/await for asynchronous operations
6. Validate and sanitize user input
7. Set appropriate HTTP status codes
8. Use try-catch blocks for error handling
===============================================
*/

import express from "express";
// console.log(express);

const server = express();
const PORT = 3000;

// server.get("/", (req, res) => {
//   res.send("hello from home page");
// });

server.get("/about", (req, res) => {
  res.send("hello from about page");
});

server.get("/signup", (req, res) => {
  res.send("hello from signup page");
});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

