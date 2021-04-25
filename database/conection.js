const mongoose = require('mongoose');
const credencial = require('./credencial.js');
/* 
    conexión a la base de datos
    <username> reemplazar por tu username
    <password> reemplazar por tu pass
*/
mongoose.connect(`mongodb+srv://${credencial.USERNAME}:${credencial.PASSWORD}@parches.efnmt.mongodb.net/${credencial.DATABASE}`, {useNewUrlParser: true, useUnifiedTopology: true});

// guardamos la conexión de la base de datos en una variable
const database = mongoose.connection;

// si hay un error
database.on('error', console.error.bind(console, 'Error de conexión:'));

// si se pudo conectar correctamente
database.once('open', function() {
  console.log("Conectado correctamente en la base de datos: ", database.name)
});