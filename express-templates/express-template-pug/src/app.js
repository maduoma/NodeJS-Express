const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
  return response.send('OK');
});

app.get('/index', (request, response) => {
  response.render('index', {
    subject: 'Pug template engine',
    name: 'our template',
    link: 'https://google.com',
  });
});

app.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
  console.log(`App is listening on port http://localhost:${PORT}/index`);
});


// process.once('SIGUSR2', function () {
//   gracefulShutdown(function () {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });
