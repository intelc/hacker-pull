const express = require('express')
const router = express.Router();
const fetchHacker =require('../scraper.js')



router.get('/latest', async (req, res) => {

    res.send(await fetchHacker())
   //res.send("hello")

})


module.exports = router;
