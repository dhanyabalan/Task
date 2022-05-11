const express = require('express')
const dotenv =require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const connectDB = require('./server/database/connection')

const app = express()




dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

app.use(morgan('tiny'))



//mongodb connection

connectDB()

//parse request to body parser


app.use(express.json())



app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())

app.use('/',require('./server/router/router'))


app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})