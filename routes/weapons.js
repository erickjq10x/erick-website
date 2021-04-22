var express = require('express');
var router = express.Router();

const controller = require('../controllers/weapons.controllers')

router.get('/', controller.showWeapons);
module.exports = router;