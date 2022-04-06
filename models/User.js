const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6
	}
})

module.exports = mongoose.model('User', userShema)