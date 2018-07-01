const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
  //process.cwd() + '/views/index.html'
});

app.get("/:time", (req, res) => {
  let time = req.params.time;
  res.send(time);
//   console.log('accessed');
//   let rawTime = req.params.time;
//   let convertedTime;
  
//   console.log(rawTime);
//   // isNum => check if all values are numeric string
//   let isNum = /^\d+$/.test(rawTime);
//   console.log(isNum);
  
//   if (isNum) {
//     convertedTime = naturalTime(parseInt(rawTime));
//     res.send(convertedTime);
//   } else {
//     convertedTime = unixTime(rawTime);
//     res.send(rawTime);
//   }
  
  // res.send(typeof rawTime);
});

// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
