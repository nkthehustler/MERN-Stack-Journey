const express = require ("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1> HI NKTHEHUSTLER </h1>");
})

app.get("/contact", function(req, res){
    res.send("<h3> contact💚🔺  me at avinashkumar@gmail.com </h3>")
})

app.get("/about", function(req, res){
    res.send("Hi i am nitin kumar a web dev student learnig web develpoment from app bevery");
})

app.get("/get", function(req, res){
    res.send("hi this is mr nk");
})


app.listen(3000, function(){
    console.log("server is listening at port 3000");
}
);