const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, resp) => {
  return resp.send('OK');
});

app.get('/index', (req, resp) => {
  resp.render('index', {
    subject: 'EJS template engine',
    name: 'our template',
    link: 'https://google.com',
  });
});

app.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
  console.log(`App is listening on port http://localhost:${PORT}/index`);
});
