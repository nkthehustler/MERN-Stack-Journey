const express = require ("express");
const { json } = require("express/lib/response");
const https = require ("https");


const app = express();

app.get("/", function (req, res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=06a3706f6694764c546fda4cc333c2c5&units=metric"
    https.get(url, function(resposne){
           
        resposne.on("data", function(data){
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const description = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            console.log("the current weather in noida is " + description);
            console.log(temp);
            
            res.write(" <p> the current weather is "  + description + "</p>" );
            res.write(" <h1> the temprature in noida is " + temp + " degree celcius. </h>");
            res.write("<img src=" + imageURL + ">");

            res.send();
        })

    })

});

// Server commnad here the server is running.

app.listen("3000", function(req, res){
    console.log("server is listenig at port 3000");

});
