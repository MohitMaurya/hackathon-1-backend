const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: [{ type: String, required: true }],
    userId: { type: String, required: true },
    status: {type: String, default: "order placed"}
}, {
    versionKey: false,
    timestamps: true
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;