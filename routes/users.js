var express = require('express');
var router = express.Router();
const passport = require('passport');
const controller = require('../controllers/user.controllers');

router.get('/register', controller.renderRegister);

router.post('/register',passport.authenticate('register',{
    successRedirect: '/',
    failureRedirect: '/register',
    passReqToCallback: true
}));

router.get('/login',controller.renderLogin);

router.post('/login',passport.authenticate('login',{
    successRedirect: '/',
    failureRedirect: '/login',
    passReqToCallback: true
}));

module.exports = router;