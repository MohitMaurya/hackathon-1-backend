const express = require('express');

const Order = require('../models/order.model');

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const order = await Order.create(req .body);

        return res.send(order);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("", async (req, res) => {
    try {
        const order = await Order.find().lean().exec();

        return res.send(order);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).lean().exec();

        return res.send(order);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

router.patch("/:id", async (req, res) => {
    const updateValue = { status: req.body.status };

    const order = await Order.findByIdAndUpdate(req.params.id, updateValue, {new:true});

    return res.send(order); 
});

router.delete("/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    return res.send(order);
});

module.exports = router;