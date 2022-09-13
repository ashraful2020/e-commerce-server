const express = require("express");
const router = express.Router();
const root_route = require("../index");
const users = require("./users");
// User router
router.get("/", async (req, res) => { 
    return res.send("deal");
});

module.exports = router;
// some category
// flash sale
// latest deal
// category