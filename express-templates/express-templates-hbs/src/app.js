const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (request, response) => {
  return response.send('OK');
});

app.get('/index', (req, resp) => {
  resp.render('index', {
    subject: 'hbs template engine',
    name: 'our template',
    link: 'https://google.com'
  });
});

app.listen(PORT, (err) => {
  if (err) console.error(`Server error: ${err}`);
  console.log(`App is listening on port http://localhost:${PORT}/index`);
});
