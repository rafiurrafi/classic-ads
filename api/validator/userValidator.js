
const Joi = require('joi');

const userValidator = Joi.object({
    firstName: Joi.string().required()
    .alphanum().min(3).max(15),
    lastName: Joi.string().required()
    .alphanum().min(3).max(15),
    userName: Joi.string().required()
    .alphanum().min(3).max(15),
    userType: Joi.string(),
    email: Joi.string().trim().required()
        .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{4,30}$'))
})

// const addressSchema = Joi.object({
//     division : Joi.string(),
//     destrict : Joi.string(),
//     upozila : Joi.string(),
//     zipcode : Joi.string(),
//     area : Joi.string()
// })
const options = {
    abortEarly:false,
    allowUnknown:true,
    stripUnknown:true,

}

module.exports = {
    userValidator, options
}