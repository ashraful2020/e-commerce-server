const express = require("express");
const router = express.Router();
const root_route = require("../index"); 
 
router.get("/", async (req, res) => {  
    const name = req.query.name;
    console.log(name)
    const result = await root_route.client.productCollection.find({category:"Earphones"}).toArray()
     return res.send(result);
});

module.exports = router;