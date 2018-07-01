const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));


// checkInt() => check if all the parameter inputs are integers
// const checkInt = (par) => {
//   console.log('in checkInt');
//   for (var i = 0; i < par.length; i++) {
//     if (!Number.isInteger(par[i])) {
//       return false;
//     }
//   }
//   return true;
// }

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:time", (req, res) => {
  console.log('accessed');
  let rawTime = req.params.time;
  let convertedTime;
  
  console.log(rawTime);
  // isNum => check if all values are numeric string
  let isNum = /^\d+$/.test(rawTime);
  console.log(isNum);
  
  if (isNum) {
    convertedTime = naturalTime(parseInt(rawTime));
    res.send(convertedTime);
  } else {
    convertedTime = unixTime(rawTime);
    res.send(rawTime);
  }
  
  // res.send(typeof rawTime);
});

// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
