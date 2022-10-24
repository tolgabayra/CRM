const Joi = require("joi");


const registerValidation = Joi.object({
    username: Joi.string().required().min(3),
    email: Joi.string().email().required().min(8),
    password: Joi.string().required().min(8),
    img: Joi.string(), 
})

const loginValidation = Joi.object({
    email: Joi.string().email().required().min(8),
    password: Joi.string().required().min(8)
})

module.exports = {
    registerValidation,
    loginValidation
}