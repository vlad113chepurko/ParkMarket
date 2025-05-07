const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
  try {
    const { login, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ login }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Login or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ login, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ error: 'Registration failed' });
  }
});