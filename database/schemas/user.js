const mongoose = require('mongoose');
const bcryt = require('bcrypt');

// usamos Schema y model de la libreria
const { Schema, model } = mongoose;

// asignamos los campos del esquema
const userSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
});

userSchema.methods.encryptPassword = (password) => {
    return bcryt.hashSync(password, bcryt.genSaltSync(10));
}

userSchema.methods.comparePassword = function(password) {
    return bcryt.compareSync(password, this.password);
}

module.exports = model("User", userSchema)