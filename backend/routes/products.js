const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const verifyToken = require('../middleware/authMiddleware');


router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description, price, category, imageURL } = req.body;
    
    const new_product = new Product({ title, description, price, category, imageURL });

    await new_product.save();
    res.status(201).json({ message: 'Product added', product: new_product });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to add product' });
  }
});