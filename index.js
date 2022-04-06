const express  = require('express')
const app = express()
const env = require('dotenv')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.js')



// body parser
app.use(express.json())

// dotenv
env.config()

// database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true}, () =>{
	console.log('database connected successfully')
})

// use routes here
app.use('/api/v1/auth', authRoutes)


app.listen(process.env.PORT, () => {
	console.log(`Server is up and running at localhost:${process.env.PORT}`)
})