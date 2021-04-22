const data = require('../public/datos/weapons.json');

exports.showWeapons = (req,res) =>{
    res.render('weapons',{data});
}