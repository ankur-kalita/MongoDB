const express = require('express')

const router = require('express').Router()
const productControllers = require("../controllers/productControllers")

// Create

router.post('/api/products' , productControllers.createProducts);

// Get route

router.get('/api/products' , productControllers.getallProducts)

// Get product by id 

router.get('/api/products/:id' , productControllers.getById)

// Update product 

router.put('/api/products/:id' , productControllers.updateProduct)

// Delete product

router.delete('/api/products/:id', productControllers.deleteProduct)