const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const verifyToken = require('../middleware/authMiddleware');