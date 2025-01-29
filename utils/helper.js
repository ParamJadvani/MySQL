const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.hashedPassword =async(password)=>{
    let hashedPassword =await bcrypt.hash(password,11);
    return hashedPassword;
}

exports.compare = async(password)=>{
    return await bcrypt.compare(password);
}

exports.generateToken = async(data)=>{
    const token =await jwt.sign(data, process.env.SECRET_KEY);
    return token;
}