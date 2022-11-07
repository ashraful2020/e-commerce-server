const express = require("express");
const router = express.Router();
const root_route = require("../index");

router.get("/:email", async (req, res) => {
    try {
        const email = req?.params?.email;
        const user = await root_route.client.userCollection.findOne({ email });
        if (user) {
            return res.send(user);
        } else {
            return res.send({ user: null, message: "User Not Found" });
        }
    } catch (error) {
        return res.send({ error, message: "Failed" });
    }
});

//  ? check is he or she admin or not 
router.get("/isAdmin/:email", async (req, res) => {
    const email = req?.params?.email;
    const user = await root_route.client.userCollection.findOne({ email });
    let isAdmin = false;
    if (user?.role === "admin") {
        isAdmin = true;
    }
    return res.send({ isAdmin });
});

//! this is trial route to increment and decrement 
router.put("/update-quantity", async (req, res) => {
    const email = "jamal@gmail.com";
    const query = { email };
    const result = await root_route.client.userCollection.updateOne(query, data);
    for (const [key, value] of Object?.entries(result.cart)) {
        const data = `${key}: ${value}`
        console.log({ data })
    };
    res.send(result)
});

router.get("/cart/:email", async (req, res) => {
    try {
        const email = req?.params?.email;
        const query = { email };
        const user = await root_route.client.userCollection.findOne(query);

        if (user) {
            return res.send({ result: user, message: "Successful" });
        } else {
            return res.send({ result: null, message: "User Not Found" });
        }
    } catch (error) {
        return res.send({ result: error, message: "Failed" });
    }
});

router.put("/:email", async (req, res) => {
    const email = req?.params.email;
    const cart = req.body;
    try {
        const result = await root_route.client.userCollection.updateOne({ email }, { $set: { cart } }, { upsert: true });
        return res.send(result);

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;