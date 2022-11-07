const express = require("express");
const router = express.Router();
const root_route = require("../index");
const sharp = require("sharp");

router.get("/", async (req, res) => {
  const cursor = await root_route.client.productCollection.find({}).toArray();
  res.send(cursor);
});


router.get("/cart-product", async (req, res) => {
  try {
    const cursor = await root_route.client.productCollection
      .find({})
      .project({ name: 1, quantity: 1, price: 1, id: 1, img: 1 })
      .toArray();
    res.send(cursor);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

router.get("/search-product", async (req, res) => {
  try {
    const cursor = await root_route.client.productCollection
      .find({})
      .project({ name: 1, id: 1, img: 1, _id: 0 })
      .toArray();
    res.send(cursor);
  } catch (error) { 
    res.end();
  }
});

router.get("/show-product", async (req, res) => {
  const cursor = await root_route.client.productCollection
    .find({})
    .project({ _id: 1, name: 1, img: 1, price: 1, stock: 1 })
    .toArray();
  res.send(cursor);
});

//  Get single product 
router.get("/:id", async (req, res) => {
  try {
    const id = req?.params?.id;
    const filter = {
      "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
    }
    const query = await root_route?.client?.productCollection?.findOne({ id });
    return res.send(query);

  } catch (error) {
    console.log(error)
  }
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
    isFlash: false,
    images: allImage,
    createdAt: new Date().toDateString(),
  };

  res.send(result);
});
module.exports = router;
