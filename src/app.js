// src/app.js
const express = require('express');
const app = express();
app.use(express.json());
const productsRouter = require('./routes/products');
app.use('/', productsRouter);

module.exports = app;
