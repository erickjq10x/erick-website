var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controllers');

router.get('/', controller.render);
module.exports = router;

router.post('/new',controller.registerUser);