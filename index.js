const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://forgivemeankur11:ckByS05QmMlqAJUf@riboru69.cto6xzz.mongodb.net/?retryWrites=true&w=majority&appName=Riboru69"
    ).then(() => {
    console.log('Connected to MongoDB')
    })
    .catch((err) => {
    console.log('Failed to connect to MongoDB', err)
    })
    
    // ProductSchema
    
    const productSchema = new mongoose.Schema({
        product_name: {
            type: String,
            required: true
        },
        product_price: {
            type: Number,
            required: true
        },
        isInStock : {
            type : Boolean,
            required : true
        },
        category : {
            type : String,
            required : true
        }
    })
    
    
    const app = express()


app.listen(6969, ()=>{
    console.log('Server is running on port 6969')
})

