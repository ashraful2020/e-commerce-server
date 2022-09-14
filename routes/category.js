const express = require("express");
const router = express.Router();
const root_route = require("../index"); 
// User router
router.get("/", async (req, res) => { 
    return res.send("Category");
});
router.post("/", async (req, res) => { 
    const result = await root_route.client.userCollection.insertOne(req?.body)
    console.log(result)
    return res.send(result);
});

module.exports = router;