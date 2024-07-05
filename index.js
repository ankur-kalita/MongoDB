const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())


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

    const productModel = mongoose.model('products', productSchema)
    
    // Create

    app.post('/api/products' , async(req, res)=>{
        
        const product = productModel.create({
            product_name : req.body.product_name,
            product_price : req.body.product_price,
            isInStock : req.body.isInStock,
            category : req.body.category
        })
        console.log(product)

        return res.status(201).json({message : 'Product Created'})
    });


app.listen(6969, ()=>{
    console.log('Server is running on port 6969')
})