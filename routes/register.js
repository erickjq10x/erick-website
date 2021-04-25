var express = require('express');
var router = express.Router();


const controller = require('../controllers/user.controllers');

router.get('/', controller.render);

router.post('/new',controller.registerUser);

module.exports = router;

