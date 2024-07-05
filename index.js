const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://forgivemeankur11:<password>@riboru69.cto6xzz.mongodb.net/?retryWrites=true&w=majority&appName=Riboru69"
    ).then(() => {
    console.log('Connected to MongoDB')
    })
    .catch((err) => {
    console.log('Failed to connect to MongoDB', err)
    })
const app = express()

app.listen(8086, ()=>{
    console.log('Server is running on port 8086')
})
