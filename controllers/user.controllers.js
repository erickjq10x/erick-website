const { InsufficientStorage } = require("http-errors");
const user = require("../database/schemas/user");
const bcrypt = require('bcrypt');

exports.render = (req, res) => {
    res.render('register');
}

exports.registerUser = (req, res) => {
    console.log('soyputo')
    var values = req.body
    const saltRounds = 10;
    const myPlaintextPassword = values.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
        var newUser = await user.create({
            fullname: values.name,
            username: values.username,
            email: values.email,
            password: hash,
        });
        await newUser.save();
    });

    res.render('index')
}