const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const root_route = require("../index");
const sharp = require("sharp");

router.get("/", async (req, res) => {
  const cursor = await root_route.client.productCollection.find({}).toArray();
  res.send(cursor);
});
router.get("/show-product", async (req, res) => {
  const cursor = await root_route.client.productCollection
    .find({})
    .project({ _id: 1, name: 1, img: 1, price: 1,stock:1 })
    .toArray();
  res.send(cursor);
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cursor = await root_route?.client?.productCollection?.findOne({
    _id: ObjectId(id),
  });
  return res.send(cursor);
});

router.post("/", async (req, res) => {
  const productInfo = req.body;
  const images = req?.files?.images;
  const allImage = [];
  // Upload Images and reduce file size using sharp
  for (const img of images) {
    const resizeImages = await sharp(img.data)
      .resize({ height: 320, width: 540, fit: "fill" })
      .jpeg({
        quality: 100,
      })
      .toBuffer()
      .then((data) => {
        return data.toString("base64");
      });
    allImage.push(resizeImages);
  }
  const result = {
    ...productInfo,
    images: allImage,
    createdAt: new Date().toDateString(),
  };

  res.send(result);
});
module.exports = router;
