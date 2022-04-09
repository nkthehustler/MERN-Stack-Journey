const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(express.static("static"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("server is listenig at port 3000");

});