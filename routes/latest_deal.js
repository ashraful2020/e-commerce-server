const express = require("express");
const router = express.Router();
const root_route = require("../index");
const users = require("./users");
// User router
router.get("/", async (req, res) => { 
    const cursor = await root_route.client.latestDealCollection.find({}).toArray();
    return res.send(cursor);
});

module.exports = router;
// some category
// flash sale
// latest deal
// category