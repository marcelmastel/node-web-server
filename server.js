const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
/* 
app.use((req, res, next) => {
  res.render('maintenance.hbs', {
    pageTitle: 'Maintenance',
    title: 'Il sito al momento è in manutenzione'
  });
  next();
}); */
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Homepage',
    title: 'Il mio nome è Marcello',
    message: 'il mio messaggio in homepage'
  });
});



app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Il titolo about',
    title: 'h1 titolo',
    message: 'il mio messaggio'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
  
});