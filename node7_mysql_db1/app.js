const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const products = require("./api/products");
const orders = require("./api/orders");

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// API Services
app.use("/products", products);
app.use("/orders", orders);

// Invalid API URL
app.use((req, res, next) => {
    console.log("Invalid URL is being tried to access");
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Any other processing error
app.use((err, req, res, next) => {
    console.log("Some error occured, no donuts for you yet");
    res.status(err.status || 501);
    res.json({
        error: {
            code: err.status || 501,
            message: err.message
        }
    });
});

module.exports = app;