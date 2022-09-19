const express = require("express");const { ObjectId } = require("mongodb");
 ;
const router = express.Router();
const root_route = require("../index");


router.get("/", async (req, res) => {
    const cursor = await root_route.client.latestDealCollection.find({}).toArray();
    return res.send(cursor);
});

router.get('/:id', async (req, res) => {
    const id = req?.params?.id;
    const cursor = await root_route?.client?.latestDealCollection?.findOne({ _id:ObjectId(id) });
    console.log("🚀 ~ file: latest_deal.js ~ line 16 ~ router.get ~ cursor", cursor)
    return res.json(cursor)
});

module.exports = router;
