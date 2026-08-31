const express = require('express');

const router = express.Router();

router.get('/' , (req , res , next) => {
    console.log("get request is work or not");
    res.json({message : "It Work "});
});

module.exports = router;