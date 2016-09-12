'use strict'
var express = require('express');

var app = express();


app.get("/", function(req, res) {
  var jane = new PhongsakHandler();
  jane.say("Hello");
  res.send("Phongsak Ritpitakphong");
});

class PhongsakHandler {
  sayHi(words) {
    console.log(words);
  }
}

app.listen(3000);