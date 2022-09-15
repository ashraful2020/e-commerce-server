const express = require("express");
const router = express.Router();
const root_route = require("../index"); 
// Date.now()
// User router
router.get("/", async (req, res) => {
  const data = await root_route.client.flashProductCollection.find({}).toArray(); 
  const result = {
    data: data[0]?.data,
    flashEnding: data[0]?.flashEnding,
    flashStarting: data[0]?.flashStarting,

  };
  console.log(result)
  return res.send(result);
}); 

module.exports = router;