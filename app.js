const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

var items = ["Do Homework", "Buy groceries", "Call Sister"];
var workItems =[];

const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.get("/", function(req, res){
   var day = date.getDate();

    res.render("lists", {list_title: day, newitem: items});
})   


app.post("/", function(req,res){
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/")
    
})

app.get("/work", function(req, res){
      res.render("lists",{list_title:"Work List", newitem: workItems});
})

app.post("/work", function(req, res){
    let item = req.body.newitem;
    workItems.push(item);
    res.redirect("/work");
})


app.listen("3000", ()=>{
    console.log("server is listening on port 3000");
})