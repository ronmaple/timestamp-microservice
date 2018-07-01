const express = require('express');
const path = require('path');

const toUnix = require('./toUnix.js');
const toNatural = require('./toNatural.js');

const app = express();

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get("/api/timestamp/:time", (req, res) => {
  console.log('accessed');
  let rawTime = req.params.time;
  let convertedTime;

  let isNum = /^\d+$/.test(rawTime);
  console.log('isNum', isNum);
  
  if (isNum) {
    console.log('isNum');
    convertedTime = toNatural(rawTime);
    console.log(convertedTime);
    res.send(convertedTime);
  } else {
    console.log('else');
    convertedTime = toUnix(rawTime);
    console.log('convertedTime', convertedTime);
    res.send({ "unix": convertedTime });
  }
  
  // res.send(typeof rawTime);
});

// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
