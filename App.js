const express = require ("express");
const bodyparser = require ("body-parser");
const request = require ("request");
const https   = require ("https");

const app = express();

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static("static"));

app.post("/", function(req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const mail = req.body.email;
  
    const data = {
      members: [{
        email_address: mail,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }]
    };
  
    var jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/b2be0e37bc";
    const options = {
      method: "POST",
      auth: "nkthehsutler1:1fe84f184f46d839e9b8d32d46796cc2-us1"
    }
  
    const request = https.request(url, options, function(response) {
     
     
    if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }

      response.on("data", function(data) {
        console.log(JSON.parse(data));
      })
    })
  
    request.write(jsonData);
    request.end();
  
  })

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen("3000" , ()=>{
    console.log("server is running on port 3000");
});



