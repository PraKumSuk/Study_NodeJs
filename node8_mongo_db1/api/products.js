const express = require("express");

const Product = require("../domain/product");
const router = express.Router();

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
var mongoDBConnection;
// Note : For some reason unable to keep DB connection logic in other JS files
// when tried always leads to undefined Research says this is quiet not possible 
// and needs to use promise and strict logics
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    mongoDBConnection = client.db('spk-mongo-db')
})


// Get all Products
router.get("/", (req, res, next) => {

    console.log('Get all Products API request invoked');

    //Fetches data from products table, 
    //if does not exists creates a collection products
    var productsCollection = mongoDBConnection.collection('products');
    productsCollection.find({}).toArray((err, data) => {

        if (err) console.log('Some error occured while goind thissssss ' + err);
        res.status(200).json({ data });
        console.log(data)
        mongoDBConnection.close;
    })
});

// Add a product
router.post("/addOne", (req, res, next) => {

    console.log('Add new Product API request invoked');
    //Obtain product info from request
    let product = new Product(req.body.prd_name, req.body.prd_price);

    var productsCollection = mongoDBConnection.collection('products');
    productsCollection.insertOne(product, (err, result) => {

        if (err) console.log('Some error occured while goind thissssss ' + err);
        res.status(200).json({ result });
        console.log(result)
        mongoDBConnection.close;
    })
});

// Add many products
router.post("/addMany", (req, res, next) => {

    console.log('Add many Products API request invoked');

    // Add array of products from request body
    var productsCollection = mongoDBConnection.collection('products');
    productsCollection.insertMany(req.body, (err, result) => {

        if (err) console.log('Some error occured while goind thissssss ' + err);
        res.status(200).json({ result });
        console.log(result)
        mongoDBConnection.close;
    })
});


// Get Product by Product Name
router.get("/:productName", (req, res, next) => {

    console.log('Get Product details by Name API request invoked for the Name : ' + req.params.productName);
    //Get name from request
    let productName = req.params.productName;
    //Form a json query object for corresponding search field and value
    var prodNameQuery = { prd_name: productName };

    // Find the saved document from DB
    var productsCollection = mongoDBConnection.collection('products');
    // Note : Here the actual field name prd_name is specified without quotes
    // This method returns only 1 or first match
    productsCollection.findOne(prodNameQuery, function (err, item) {

        if (err) console.log('Some error occured while goind thissssss ' + err);
        console.log('Product Price Value obtained is ', item.prd_price);
        res.status(200).json({ item });
        mongoDBConnection.close;
    });

});

//Delete product by product name
router.post("/delete", (req, res, next) => {

    console.log('Delete Product details by Name API request invoked for Name : ' + req.params.productName);
    //Get name from request
    let productName = req.body.prd_name;
    var prodNameQuery = { prd_name: productName };

    // Delete document from DB
    var productsCollection = mongoDBConnection.collection('products');
    productsCollection.deleteOne(prodNameQuery, function (err, item) {

        if (err) console.log('Some error occured while goind thisss ' + err);
        console.log();
        //res.status(200).json({item});
        res.status(200).json('Document with name : ' + req.body.prd_name + ' has been deleted');
        mongoDBConnection.close;
    });

});

module.exports = router;