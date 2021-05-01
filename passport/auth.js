const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const controller = require('../controllers/user.controllers')
const User = require("../database/schemas/user");

passport.use('register', new localstrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    var value = req.body;
    const newUser = await controller.registerUser(value);
    await newUser.save();
    done(null, newUser);
}));
passport.use('login', new localstrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback:true
}, async ( req, username, password, done) => {
    const user = await User.findOne({username: username});
    if(!user) {
        return done ( null, false, req.flash('loginMessage','no user found'));
    }
    if(!user.comparePassword(password)){
        return done (null, false, req.flash('loginMassage','incorrect password'));
    }
    done(null,user);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await controller.findId(id);
    done(null, user);
});