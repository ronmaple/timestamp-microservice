const express = require('express');
const path = require('path');

const toUnix = require('./toUnix.js');
const toNatural = require('./toNatural.js');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
  //process.cwd() + '/views/index.html'
});

app.get("/:time", (req, res) => {
  console.log('accessed');
  let rawTime = req.params.time;
  let convertedTime;
  
  console.log('rawTime', rawTime);
  // isNum => check if all values are numeric string
  let isNum = /^\d+$/.test(rawTime);
  console.log('isNum', isNum);
  
  // if (isNum) {
  //   convertedTime;
  //   res.send(convertedTime);
  // } else {
  //   convertedTime;
  //   res.send(rawTime);
  // }
  
  res.send(typeof rawTime);
});

// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
