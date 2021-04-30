const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const controller = require('../controllers/user.controllers')

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
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await controller.findId(id);
    done(null, user);
});