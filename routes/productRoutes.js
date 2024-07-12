// const express = require('express')

const router = require('express').Router()
const productControllers = require("../controllers/productControllers")

// Create

router.post('/' , productControllers.createProducts);

// Get route

router.get('/' , productControllers.getallProducts)

// Get product by id 

router.get('/:id' , productControllers.getById)

// Update product 

router.put('/:id' , productControllers.updateProduct)

// Delete product

router.delete('/:id', productControllers.deleteProduct)

module.exports = router