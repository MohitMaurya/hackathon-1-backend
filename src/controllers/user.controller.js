const express = require('express');

const User = require('../models/user.model');

const router = express.Router();

router.post("", async (req, res) => {

    const user = await User.create(req.body);

    return res.send(user);
});

router.get("", async (req, res) => {
    const email = req.body.email;
    const users = await User.findOne({email: email}).lean().exec();

    return res.send(users);
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id).lean().exec();

    return res.send(user);
});

router.patch("/:id", async (req, res) => {
    const updateValue = { cart: req.body.cart };

    const user = await User.findByIdAndUpdate(req.params.id, updateValue, {new:true});

    return res.send(user); 
});

router.delete("/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    return res.send(user);
});

module.exports = router;