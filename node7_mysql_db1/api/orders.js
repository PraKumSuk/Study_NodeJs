const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log('Get all Orders API request invoked');
    res.status(200).json({
        message: "Orders listed."
    });
});

router.get("/:orderId", (req, res, next) => {
    console.log('Get Order details by Id API request invoked');
    var oid = req.params.orderId;
    res.status(200).json({
        message: `You are at spcific orders page for id ${oid}.`,
        id: oid
    });
});

module.exports = router;