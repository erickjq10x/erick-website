var express = require('express');
var router = express.Router();

const controller = require('../controllers/armas.controllers')

router.get('/', controller.mostrarArmas);
module.exports = router;