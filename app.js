const http =require("http");
const path = require("path");
const express = require("express"); 
const app = express();
const adminroute = require("./routes/admin.js");
const shoproute = require("./routes/shop.js");
const contactroute = require("./routes/contact.js");
const successroute = require("./routes/success.js");

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../","Shopping app", "views", "Welcome.html"));
});

//when request come firstly it will directed to adminroute then shoproute.
app.use("/admin",adminroute);
app.use(shoproute);
app.use(contactroute);
app.use(successroute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","error 404.html"));
})
app.listen(4000);