const datos = require('../public/datos/armas.json');

exports.mostrarArmas = (req,res) =>{
    res.render('armas',{datos});
}