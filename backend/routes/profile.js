import express from "express";
import User from "../models/Users.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }

    const decoded = jwt.verify(token, "Secret");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};