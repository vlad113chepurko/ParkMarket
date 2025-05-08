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

router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { title, description, price, category, imageURL } = req.body;
    
    const updated_product = await Product.findByIdAndUpdate(req.params.id, { title, description, price, category, imageURL }, { new: true });

    if (!updated_product) return res.status(404).json({ error: 'Product not found' });

    res.status(200).json({ message: 'Product updated', product: updated_product });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to update product' });
  }
});