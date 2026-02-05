import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const PORT = 3000;

const app = express();
app.use(express.json());

//mongo connection

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
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
  //   const { email, username, password } = req.body;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  let hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email: email,
    username: username,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  if (!savedUser) return res.status(400).send({ message: err.message });

  res.status(201).send({ message: "user created successfully" });
});

//read

app.get("/allusers", async (req, res) => {
  const users = await User.find();

  if (!users) return res.status(404).send({ message: err.message });

  res.status(200).send(users);
});
app.get("/", (req, res) => {
  res.end("hii");
});

app.listen(PORT, () => {
  console.log("server started");
});
