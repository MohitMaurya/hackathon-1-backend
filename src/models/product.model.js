const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    currency: { type: String, required: true },
    price: { type: Number, required: true },
    thumb: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;