/*
  -----------------------------------------------------------------------------
  ODM (Object Data Modeling):
  -----------------------------------------------------------------------------
  - ODM is a design pattern used to map data from a document-oriented database 
    (like MongoDB) to objects in an application code (like JavaScript/Node.js).
  - It acts as an abstraction layer, allowing developers to interact with the 
    database using programming language constructs (classes, objects) rather 
    than writing raw database queries.

  -----------------------------------------------------------------------------
  Mongoose:
  -----------------------------------------------------------------------------
  - Mongoose is an ODM library for MongoDB and Node.js.
  - It provides a schema-based solution to model application data.
  - Features include: 
    - Schemas to define data structure.
    - Models to interact with the database.
    - Built-in type casting and validation.
    - Query building and middleware (hooks).

  -----------------------------------------------------------------------------
  Key Concepts in Mongoose:
  -----------------------------------------------------------------------------
  1. Schema: Defines the structure of the document (fields, types, validation).
  2. Model: A wrapper for the schema (like a Class) used to create and read documents.
  3. Document: An instance of a Model (represents a single record in the DB).
*/

import express from "express";
import mongoose from "mongoose"; // Importing Mongoose to interact with MongoDB
import bcrypt from "bcryptjs"; // Importing Bcrypt for password hashing
import jwt from "jsonwebtoken";

const PORT = 3000;

const app = express();
app.use(express.json());

// ----------------------------------------------------------------------------
// MongoDB Connection:
// ----------------------------------------------------------------------------
// mongoose.connect() establishes a connection to the MongoDB database.
// It returns a promise that resolves on success and rejects on error.

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@mern-12-wd.xi1oap2.mongodb.net/",
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
//hi

// ----------------------------------------------------------------------------
// Define Schema:
// ----------------------------------------------------------------------------
// A Schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

// ----------------------------------------------------------------------------
// Create Model:
// ----------------------------------------------------------------------------
// A Model is a class with which we construct documents.
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// 'User' -> 'users' collection

const User = mongoose.model("User", UserSchema);

// ----------------------------------------------------------------------------
// Routes (CRUD Operations):
// ----------------------------------------------------------------------------

// Create (Register):
app.post("/register", async (req, res) => {
  //   const { email, username, password } = req.body;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  // Hashing the password using bcrypt (with a salt round of 10)
  let hashedPassword = await bcrypt.hash(password, 10);

  // Creating a new instance of the User model
  const newUser = new User({
    email: email,
    username: username,
    password: hashedPassword,
  });

  // Saving the new user document to the database
  const savedUser = await newUser.save();

  if (!savedUser)
    return res.status(400).send({ message: "Error creating user" });

  res.status(201).send({ message: "user created successfully" });
});

app.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let secret = "vikaskumar";
  const user = await User.findOne({ email: email });
  if (!user) return res.status(404).send({ message: "user not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ message: "Invalid password" });

  //token assign

  const token = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    secret,
  );
  console.log(token);
  res.status(200).send({ message: "Login successful" });
});
// Read (Get All Users):
// app.get("/allusers", async (req, res) => {
//   // User.find() retrieves all documents from the 'users' collection
//   const users = await User.find();

//   if (!users) return res.status(404).send({ message: "No users found" });

//   res.status(200).send(users);
// });

//update user

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "access denied, no token availble" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "vikaskumar");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "invalid token" });
  }
};
app.get("/userlist", verifyToken, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send({ message: "user not found" });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ message: "user not found" });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/", (req, res) => {
  res.end("hii");
});

app.listen(PORT, () => {
  console.log("server started");
});
