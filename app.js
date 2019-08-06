const express = require("express");
const path = require("path");

let app = express();
let publicDir = path.join( __dirname, "./public");
let PORT = process.env.PORT || 3000;

app.use(express.static(publicDir));

app.listen(PORT,(err)=>{
  if(err) return console.log("Error", err);
  console.log("listening on port 3000");
})