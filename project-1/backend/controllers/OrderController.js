import express from "express";
import jwt from "jsonwebtoken";
import Order from "../models/Order.js";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const OrderController = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Middleware to check if admin
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Require Admin Role" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default OrderController;
