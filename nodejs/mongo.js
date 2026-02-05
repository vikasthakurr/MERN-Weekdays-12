import express from "express";
import mongoose from "mongoose";

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
  password: String
});

const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  const newUser = new User(email, username, password);

  const savedUser = await newUser.save();

  if (!savedUser) return res.status(400).send({ message: err.message });

  res.status(201).send({ message: "user created successfully" });
});
app.get("/", (req, res) => {
  res.end("hii");
});

app.listen(PORT, () => {
  console.log("server started");
});
