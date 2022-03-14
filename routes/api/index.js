const express = require('express');
const { route } = require('../users');

const router = express.Router();

router.use('/v1',require('./v1'));



module.exports = router;
