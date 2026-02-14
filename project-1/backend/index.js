import express from "express";
import dotenv from "dotenv";
import AuthController from "./controllers/AuthController.js";
import OrderController from "./controllers/OrderController.js";
import connectDB from "./controllers/dbController.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
app.use(cors());

//mongo connection
connectDB();
//auth controller

app.use("/api/auth", AuthController);

//controller for orders
app.use("/api/orders", OrderController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
