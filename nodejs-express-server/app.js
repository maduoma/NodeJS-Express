const express = require('express');
const app = express();

app.use('/', require('./route/index'));
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listenening on port: ${PORT}`);
});
