const bycript = require('bcryptjs')


module.exports = {
	hashPassword: async(data) =>{
		const salt =  await bycript.genSalt (10)
		return  await bycript.hash(data, salt)
	},

	verifyPassword: async(plain, hashed) =>{
		return  await bycript.compare(plain, hashed)
	}
}