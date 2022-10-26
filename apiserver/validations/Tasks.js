const Joi = require("joi")

const createValidation = Joi.object({
    title: Joi.string().required().min(3),
    desc: Joi.string().required().min(8).max(70),
    priorty: Joi.number().required(),
    user_id: Joi.string().required(),
    finishDate: Joi.date().required(),
    expectedEarn: Joi.number()
})


const updateValidation = Joi.object({
    title: Joi.string().required().min(3),
    desc: Joi.string().required().min(8),
    priorty: Joi.number().required(),
    finishDate: Joi.date().required(),
    expectedEarn: Joi.number()
})


module.exports = {
    createValidation,
    updateValidation
}