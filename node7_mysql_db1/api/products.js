const express = require("express");
const db = require("../db/database");
const Product = require("../domain/product");

const router = express.Router();

router.get("/", (req, res, next) => {

    console.log('Get all Products API request invoked');
    db.query(Product.getAllProductSQL(), (err, data) => {

        if (!err) {
            console.log('Get all Products API respone formed...and....is being sent now');
            res.status(200).json({
                message: "Products listed.",
                productId: data
            });
        } else {
            console.log('Some error occured while goind thissssss ' + err)
        }
    });
});

router.post("/add", (req, res, next) => {

    console.log('Add new Product API request invoked');
    //Obtain product info from request
    let product = new Product(req.body.prd_name, req.body.prd_price);

    db.query(product.getAddProductSQL(), (err, data) => {
        console.log('Add new Product API respone formed...and....is being sent now');
        res.status(200).json({
            message: "Product added.",
            productId: data.insertId
        });
    });
});

router.get("/:productId", (req, res, next) => {

    console.log('Get Product details by Id API request invoked');
    let pid = req.params.productId;

    db.query(Product.getProductByIdSQL(pid), (err, data) => {
        if (!err) {
            console.log('Get Product details by Id API respone formed...and....is being sent now');
            if (data && data.length > 0) {

                res.status(200).json({
                    message: "Product found.",
                    product: data
                });
            } else {
                res.status(200).json({
                    message: "Product Not found."
                });
            }
        } else {
            console.log('Some error occured while goind thissssss ' + err)
        }
    });
});

router.post("/delete", (req, res, next) => {

    var pid = req.body.productId;

    db.query(Product.deleteProductByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `Product deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message: "Product Not found."
                });
            }
        }
    });
});

module.exports = router;