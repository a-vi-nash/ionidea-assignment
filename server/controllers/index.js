'use strict';
const express = require('express'),
    router = express.Router();

router.use('/todo', require('./todo'));
router.use('/user', require('./login'));

module.exports = router;
