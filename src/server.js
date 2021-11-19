const express = require('express');
require('dotenv').config();
const cors = require('cors')

const connect = require("./configs/db");

const productController = require("./controllers/product.controller")

const userController = require("./controllers/user.controller")

const orderController = require("./controllers/order.controller")

const app = express();
app.use(cors());

app.use(express.json());

app.use("/products", productController);

app.use("/users", userController);

app.use("/orders", orderController);

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
    await connect();
    console.log("Listening on port", PORT);
})