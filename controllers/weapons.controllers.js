const Weapon = require('../database/schemas/weapons');

exports.showWeapons = async (req,res) =>{
    var weapons = await Weapon.find().lean();
    res.render('weapons',{weapons});
}
exports.showAddWeapons = (req,res) =>{
    res.render('addweapons');
}
exports.addWeapons = async (req,res) =>{
    var {name, image} = req.body;
    var newWeapon = await Weapon.create({
        name: name,
        image: image,
    });
    await newWeapon.save();
    res.redirect('/weapons');
}

exports.updateWeapon = async (req, res) =>{
    var {name, newName, newImage} =req.body;
    var weapon = await Weapon.findOne({
        'name': name
    })
    console.log(weapon)
    await Weapon.findOneAndUpdate(weapon.id, {
        'name': newName,
        'image': newImage,
    });
    res.redirect('/weapons');
}

exports.deleteweapon = async (req, res) => {
    var {name} = req.body;
    var weapon = await Weapon.findOne({
        name: name 
    })
    await Weapon.findOneAndDelete (weapon.id);
    res.redirect('/weapons');
}