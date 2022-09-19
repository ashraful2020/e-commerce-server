const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const root_route = require("../index");
router.get('/', async (req, res) => {
    const cursor = await root_route.client.productCollection.find({}).toArray();
    res.send(cursor)
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cursor = await root_route?.client?.productCollection?.findOne({ _id:ObjectId(id) });
     return res.send(cursor)
});

module.exports = router;    
