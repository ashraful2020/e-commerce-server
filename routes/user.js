const express = require("express");
const router = express.Router();
const root_route = require("../index");
const id = "625b4b60-611c-490c-ac0a-f3c2d2afd05c";

router.get("/:email", async (req, res) => {
    const email = req?.params?.email;
    const query = { email };
    const result = await root_route.client.userCollection.findOne(query);
    return res.send(result);
});

router.put("/update-quantity", async (req, res) => {
    const email = "jamal@gmail.com";
    const query = { email };

    const data = {
        $set: {
        }
    };
    const data2 = {
        $push: {
            cart: { $each: [{}, {}] }
        }
    };

    console.log("hello")
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
        const cursor = await root_route.client.userCollection.findOne(query);

        if (cursor) {
            return res.send({ result: cursor, message: "Successful" });
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


// router.get("/:email", async (req, res) => {
// const email = req?.params?.email;
// console.log(email)
// const query = { email };
// const user = await userCollection.findOne(query);
// let isAdmin = false;
// if (user?.role === "admin") {
//     isAdmin = true;
// }
// res.json({ admin: isAdmin });
// });


module.exports = router;

// {
//     "name": "Ashraful islam",
//         "cart": {
//     "625b4b60-611c-490c-ac0a-f3c2d2afd05c":5,
//     "a9d89eac-7418-4bca-a484-c8238c356270":1,
//     "4ead4708-68e8-4a93-b28e-5e99ccc4d75c":3,
//     "5960bf40-9603-4a39-9ff6-6cf9f1ce4815":2,
//     "9e7cda87-8160-458f-bd32-ecf253a2d86a":1,
//     "5690e579-a943-4b42-9ffe-dfc65b71c560":6,
//     "eaff8921-f7eb-446f-b072-d96559685de0":2,
//     "b278e667-ca17-465c-b603-af1af4319b7b":3,
//     "96239c09-8b1c-4c81-99f9-f43e7613eab3":1,
//     "d1116075-10f2-49c4-985e-0d41e19ce1b3":4
// }
//}

// {
//     "name": "jamal mia",
//               "cart": {
//         "625b4b60-611c-490c-ac0a-f3c2d2afd05c": 5,
//         "a9d89eac-7418-4bca-a484-c8238c356270": 1,
//         "4ead4708-68e8-4a93-b28e-5e99ccc4d75c": 3,
//         "5960bf40-9603-4a39-9ff6-6cf9f1ce4815": 2,
//         "d1116075-10f2-49c4-985e-0d41e19ce1b3": 10
//     }
// }
