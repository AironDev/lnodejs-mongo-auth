const bycript = require('bcryptjs')


module.exports = {
	hash: async(data) =>{
		const salt =  await bycript.genSalt (10)
		return  await bycript.hash(data, salt)
	}
}