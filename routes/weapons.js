var express = require('express');
var router = express.Router();

const controller = require('../controllers/weapons.controllers')

router.get('/', controller.showWeapons);

router.get('/addweapons',controller.showAddWeapons);

router.post('/add',controller.addWeapons);

router.post('/update',controller.updateWeapon);

router.post('/delete',controller.deleteweapon);

module.exports = router;
