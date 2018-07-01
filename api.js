const express = require('express');
const path = require('path');

const toUnix = require('./toUnix.js');
const toNatural = require('./toNatural.js');

const app = express();

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get("/api/timestamp/:date_string?", (req, res) => {
  console.log('accessed');
  let raw = req.params.date_string || new Date();
  console.log(raw);
  let convertedTime;

  let isNum = /^\d+$/.test(raw);
  
  if (isNum) {
    convertedTime = toNatural(raw);
    res.json(convertedTime);
  } else {
    convertedTime = toUnix(raw);
    res.json({ "unix": convertedTime });
  }
  
  // res.send(typeof rawTime);
});

// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
