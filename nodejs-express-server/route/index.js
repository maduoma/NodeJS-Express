const express = require('express');
const router = express.Router();

_hello = require('../controller/hello');
router.get('/hello', _hello.callback);
module.exports = router;
