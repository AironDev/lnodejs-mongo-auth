const Joi = require('@hapi/joi')

const registerValidation = data =>{
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		password: Joi.string().min(6).required(),
		date: Joi.date()
	})

	const {error, value} = schema.validate(data, {abortEarly: false})
	const errors = null
	if(error)errors = error.details.map(error => error.message)
	return {errors, value}
}

const loginValidation = (data) =>{
	const schema = {
		email: Joi.string().required().email(),
		password: Joi.string().min(6).required(),
	}

	const {error} = Joi.validate(data, schema)
	const errorBag = error.details.map(error => error.message)
	return errorBag
}


module.exports = {registerValidation, loginValidation}