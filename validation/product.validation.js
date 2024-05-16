const Joi = require("joi");

const createProductValidation = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    price: Joi.number().min(100).required(),
    stock: Joi.number().min(1).required(),
    is_preorder: Joi.boolean().required().default(false),
    description: Joi.string().min(5).required()
})

const getProductValidation = Joi.string().uuid().required();

module.exports = {
    createProductValidation,
    getProductValidation
}