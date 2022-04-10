const express = require('express');

const { getRoot } = require('./endpoints');

const router = express.Router();

router.route('/').get(getRoot);

module.exports = { router };
