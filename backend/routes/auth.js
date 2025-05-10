import express from "express";
import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { login, email, password } = req.body;
    const existingUser = await Users.findOne({ $or: [{ login }, { email }] });
    console.log("Existing user check:", existingUser);
    if (existingUser) {
      return res.status(400).json({ error: "Login or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Users({ login, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await Users.findOne({ login });

    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = jwt.sign({ userId: user._id, login: user.login }, "Secret", {
      expiresIn: "1h",
    });
    res.status(200).json({  message: "User registered successfully", token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
