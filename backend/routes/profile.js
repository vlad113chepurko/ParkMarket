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

router.get('/getUser', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "name description avatar"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Failed to get user profile" });
  }
});

router.put('/update', verifyToken, async (req, res) => {
  try {
    const { avatar, name, description, login, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { avatar, name, description, login, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Failed to update profile" });
  }
});

export default router;
