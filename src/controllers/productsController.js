// src/controllers/productsController.js
const { Product } = require('../models');
async function createProduct(req, res) {
try {
const { name, price, description } = req.body;
const product = await Product.create({ name, price, description });

res.status(201).json(product);
} catch (error) {
res.status(500).json({ error: 'Error creating the product' });
}
}

async function getProducts(req, res) {
try {
const products = await Product.findAll();
res.status(200).json(products);
} catch (error) {
res.status(500).json({ error: 'Error fetching products' });
}
}
module.exports = { createProduct, getProducts };
