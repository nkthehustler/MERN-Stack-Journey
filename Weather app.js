// all the modules are required here.
const express = require ("express");
const https = require ("https");
const bodyparser= require ("body-parser");


// app requests and resposnes goes here.
const app = express();
app.use(bodyparser.urlencoded({extended: true}))
app.get("/", function (req, res){


    res.sendFile(__dirname + "/index.html")
    app.post ("/", function(req, res){
         
    const query = req.body.city;
    const apikey = "06a3706f6694764c546fda4cc333c2c5";
    const unit = "metric";

    
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apikey +"&units=" +unit;
    https.get(url, function(resposne){
           
        resposne.on("data", function(data){
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const description = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            console.log("the current weather in noida is " + description);
            console.log(temp);
            
            res.write("<h1> The current weather in "+ query + " is "  + description + "</h1>");
            res.write(" <h3> and temprature in "+ query +" is " + temp + " degree celcius. </h3>");
            res.write("<img src=" + imageURL + ">");

            res.send();
        })
      })
    })
 });

// Server commnad here the server is running.

app.listen("3000", function(req, res){
    console.log("server is listenig at port 3000");

});
