const express = require('express');
const app = express();
const port = 3000;

let listItens = [
  {
    id: 1,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
  {
    id: 2,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
  {
    id: 3,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
  {
    id: 4,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
  {
    id: 5,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
  {
    id: 6,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
  {
    id: 7,
    date: '02.05.21',
    title: 'Cadeira Gamer',
    currency: 100000,
    description: 'Cadeira gamer vermelha da marca Fortrek. Compra realizada no Mercado Livre e parcelada'
  },
];

/****************************
 * Application config
 ****************************/
app.use(express.static(__dirname));

app.set('view engine', 'ejs');

/****************************
 * Routers
 ****************************/
app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(port);