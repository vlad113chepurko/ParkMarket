const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const verifyToken = require('../middleware/authMiddleware');


router.get('/drinks', verifyToken, async (req, res) => {
  try {
    const drinks = await Product.find({ category: 'Drinks' });
    res.status(200).json(drinks);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch drinks' });
  }
});

router.get('/souvenirs', verifyToken, async (req, res) => {
  try {
    const souvenirs = await Product.find({ category: 'Souvenirs' });
    res.status(200).json(souvenirs);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch souvenirs' });
  }
});

router.get('/children-items', verifyToken, async (req, res) => {
  try {
    const children_items = await Product.find({ category: 'Children items' });
    res.status(200).json(children_items);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch children items' });
  }
});

module.exports = router;