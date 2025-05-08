const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, required: true }
});

module.exports = mongoose.model('Products', productSchema);