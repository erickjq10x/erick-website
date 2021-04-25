const user = require("../database/schemas/user");

exports.render = (req,res)=>{
    res.render('register');
}

exports.registerUser = async (req,values) => {
    var values = req.body
    return newUser = await user.create({
        fullname: values.name,
        username: values.username,
        email: values.email,
        password: values,password,
    });
}