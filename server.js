const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(port);