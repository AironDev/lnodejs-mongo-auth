const User = require('../models/User.js')
const {registerValidation } = require('../validators/authRequests')
const {hashPassword, verifyPassword} = require('../utils/hash')

module.exports = {
	register: async (req, res) =>{

		// Check validation errors here
		const {errors, value} = registerValidation(req.body)
		if(errors)return res.status(400).send(errors)

		
		let { name, email, password, date } = value

		// check is user already exist
		const userExists = await User.findOne({email})
		if(userExists) return res.status(422).send({message: 'Email already taken'})

		
		// hash password
		password = await hashPassword(password)

		User.create({name, email, password, date}, (err,  user) =>{
			if(err) return res.status(400).send(err)
			return res.status(201).send(user)
		})
	},

	login: async (req, res) =>{
		const {email, password} =  req.body
		const user = await User.findOne({email})
		if(!user) return res.status(401).send({message: 'Email or password is wrong'})

		// compare password
		const validPassword = await verifyPassword(password, user.password)
		if(!validPassword) return res.status(401).send({message: 'Email or passwordd is wrong'})


	}
}