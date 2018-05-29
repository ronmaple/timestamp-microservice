const express = require('express');

const app = express();

app.get('views/home', (req, res) => {
  app.use(express.static('public'));
  res.sendFile(__dirname + 'views/home')
  res.end('Hello World!');
});

app.listen(process.env.PORT);