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

    // Get route

    app.get('/api/products' , async(req, res)=>{
        const allProducts = await productModel.find({})

        return res.json(allProducts)
    })

    // Get product by id 

    app.get('/api/products/:id' , async(req, res)=>{
        const product = await productModel.findById(req.params.id)

        return res.json(product)
    })

    // Update product 

    app.put('/api/products/:id' , async(req, res)=>{
       const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body)

       return res.json(updatedProduct)
    })

    // Delete product

    app.delete('/api/products/:id', async(req, res)=>{
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id)

        return res.json(deletedProduct)
    })

app.listen(6969, ()=>{
    console.log('Server is running on port 6969')
})