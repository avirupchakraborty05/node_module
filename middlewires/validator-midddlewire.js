
// const { default: isEmail } = require('validator/lib/isEmail');
// const { validatorRegister } = require('../helper/validate');
// const validator = require('../helpers/validate');
// const signup = async (req, res, next) => {
//     const validationRule = {
//         "email": "required|string|email",
//         // "required|string|email"
//         "username": "required|string",
//         "phone": "required|string",
//         "password": "required|string|min:6|confirmed",
//         // "required|string|min:6|confirmed"
//         "gender": "string"
//     };

//     await validatorRegister(req.body, validationRule, {}, (err, status) => {
//         if (!status) {
//             res.status(412)
//                 .send({
//                     success: false,
//                     message: 'Validation failed',
//                     data: err
//                 });
//         } else {
//             next();
//         }
//     }).catch( err => console.log(err))
// }
// module.exports = {
//     signup
// };

