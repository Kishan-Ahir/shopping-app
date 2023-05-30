const path = require("path");

const express = require("express"); 
const bodyparser = require("body-parser");

const router = express.Router();//here by using express.Router() it will return one object which is used to handle the request,return the response and direct request to next middlewares.

router.use(bodyparser.urlencoded({extended:false}));


//    /admin/FORM with GET request
router.get("/FORM",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","admin.html"));
});


//    /admin/added with POST request
router.post("/FORM",(req,res,next)=>{
    let product_name = req.body.product_name;
    console.log(product_name);
    res.redirect("/admin/FORM");
})

module.exports = router;//we need to export this admin.js file to use or import into any other file by specifimg path of this current file into that file.