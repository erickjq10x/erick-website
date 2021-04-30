const mongoose = require('mongoose');

// usamos Schema y model de la libreria
const { Schema, model } = mongoose;

// asignamos los campos del esquema
const weaponSchema = new Schema({
    name: String,
    image: String,
});

module.exports = model("weapons", weaponSchema)