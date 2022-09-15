const express = require("express");
const router = express.Router();
const root_route = require("../index");
router.get('/', async(req, res) => {
    const cursor = await root_route.client.productCollection.find({}).toArray();
    res.send(cursor)
});
module.exports = router;