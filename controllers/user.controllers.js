const user = require("../database/schemas/user");

exports.renderRegister = (req, res) => {
    res.render('register');
}

exports.renderLogin = (req, res) => {
    res.render('login');
}

exports.registerUser = async(value) => {
    var newUser = await user.create({
        fullname: value.fullname,
        username: value.username,
        email: value.email,
    });
    newUser.password = newUser.encryptPassword(value.password);
    return newUser;
}
exports.findId = async(id) => {
    return await user.findById(id);
}