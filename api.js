const express = require('express');

const app = express();

app.route('/home', (req, res) => {
  res.send('home');
});

app.listen(process.env.PORT);