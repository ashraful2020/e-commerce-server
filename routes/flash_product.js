const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const root_route = require("../index");
// Date.now()
// User router
router.get("/", async (req, res) => {
  const flash = { isFlash: 'success' }

  const data = await root_route.client.productCollection.find(flash).limit(5).toArray();
  const flashTime = await root_route.client.flashProductCollection.find({}).project({ flashEnding: 1, flashStarting: 1 }).toArray();
  const result = {
    data: data,
    flashEnding: flashTime[0]?.flashEnding,
    flashStarting: flashTime[0]?.flashStarting,

  };
  return res.send(result);
});
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const cursor = await root_route?.client?.flashProductCollection?.find().toArray();
  const result = cursor[0]?.data;
  const newResult = result?.find((product) => product._id === id)
  return res.send(newResult)
});
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const cursor = await root_route?.client?.flashProductCollection?.find().toArray();
  const result = cursor[0]?.data;
  const newResult = result?.find((product) => product._id === id)
  return res.send(newResult)
});

module.exports = router;
