const route = require('express').Router();
route.get('/', (req, res) => {
    console.log("hello");
    res.send('product')
})
module.exports=route