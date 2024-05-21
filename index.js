
const express = require("express");
const bodyParser = require("body-parser");
const gTTs = require("gtts");
const say = require('say');
const player = require('play-sound')(opts = {})

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req,res){
    res.sendFile(__dirname + "/about.html");
});
app.get("/contact",function(req,res){
  res.sendFile(__dirname + "/contact.html");
});
app.post("/trans",function(req,res){
  res.sendFile(__dirname + "/trans.html");
});


app.post("/",function(req,res){
  res.sendFile(__dirname + "/ttov.html");
});
app.post("/ttov",function(req,res){
  var speech = req.body.text;
  var gtts = new gTTs(speech,'en');
  gtts.save('voice.mp3',function(err,result){
    if(err) {throw new Error(err); }
    console.log("text to speech converted");
  });
  res.sendFile(__dirname + "/ttov.html");
});

app.listen(3000,function(){
  console.log("server is running on port 3000.");
});
