const e = require('express');
var validator = require('validator');

// const validatorfunc = async (body, rules, customMessages, callback) => {
//     const validation = new Validator(body, rules, customMessages);
//     validation.passes(() => callback(null, true));
//     validation.fails(() => callback(validation.errors, false));
// };


const validatorRegister = (req,res,next)=>{
    const {email,password} = req.body || {};
    if(!validator.isEmail(email)){
        res.status(401).send({Message:"Email is invalid",success:false})
    }else if(!validator.isStrongPassword(password,{ minLength: 6, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0, returnScore: false, pointsPerUnique: 0, pointsPerRepeat: 0, pointsForContainingLower: 0, pointsForContainingUpper: 0, pointsForContainingNumber: 0, pointsForContainingSymbol: 0 })){
        res.status(401).send({Message:"Password is invalid",success:false})
    }else{
        req.data = {email,password}
    next()
    }
    
}


module.exports ={ validatorRegister}
