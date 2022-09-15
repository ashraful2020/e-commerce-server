const express = require("express");
const router = express.Router();
const root_route = require("../index"); 
// User router
router.get("/", async (req, res) => { 
    console.log('first')
    const result = await root_route.client.searchByCategoryCollection.find({ }).toArray()
    console.log(result)
    return res.send(result);
});
 

module.exports = router;