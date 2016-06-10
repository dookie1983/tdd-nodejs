var express = require('express');

var app = express();

app.get("/", function(req, res) {
  res.send("Phongsak Ritpitakphong");
});

app.listen(3000);