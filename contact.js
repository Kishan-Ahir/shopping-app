const express = require("express");
const router = express.Router();
const path = require("path");
const bodyparser = require("body-parser");


router.use(bodyparser.urlencoded({extended:false}));

router.get("/contact_us",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","contact_us.html"));
});

router.post("/contact_us", (req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.email);
  res.redirect("/sucess");
});


module.exports = router;