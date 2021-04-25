const mongoose = require('mongoose');

// usamos Schema y model de la libreria
const { Schema, model } = mongoose;

// asignamos los campos del esquema
const userSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
});

module.exports = model("User", userSchema)