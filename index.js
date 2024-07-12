const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.json())


mongoose.connect(process.env.MONGO_URL
    ).then(() => {
    console.log('Connected to MongoDB')
    })
    .catch((err) => {
    console.log('Failed to connect to MongoDB', err)
    })
    


    
    

app.listen(6969, ()=>{
    console.log('Server is running on port 6969')
})