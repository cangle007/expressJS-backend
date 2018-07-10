const express = require('express');
const router = express.Router();
const peopleController = require('./peopleController');

router.get('/user', peopleController.get_userInfo);

module.exports = router;
