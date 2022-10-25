const Joi = require("joi");


const createValidation = Joi.object({
    fullName: Joi.string().required().min(3),
    companyName: Joi.string().required().min(3),
    email: Joi.string().email().min(8),
    phoneNumber: Joi.string().min(6),
    contactOwner: Joi.string().min(3),
    user_id: Joi.string().required()
})

const updateValidation = Joi.object({
    fullName: Joi.string().required().min(3),
    companyName: Joi.string().required().min(3),
    email: Joi.string().email().min(8),
    phoneNumber: Joi.string().min(6),
    contactOwner: Joi.string().min(3),
})



module.exports = {
    createValidation,
    updateValidation
}