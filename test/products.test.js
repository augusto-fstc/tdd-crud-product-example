// test/products.test.js
const request = require('supertest');
const app = require('../src/app');
const { Product } = require('../src/models');

describe('Products API', () => {
beforeEach(async () => {
await Product.sync({ force: true });
});

it('should create a new product', async () => {
const response = await request(app)
.post('/products')

.send({
name: 'Product 1',
price: 19.99,
description: 'A great product',
});

expect(response.status).toBe(201);
expect(response.body).toHaveProperty('id');
expect(response.body.name).toBe('Product 1');
});

it('should get a list of products', async () => {
const response = await request(app).get('/products');

expect(response.status).toBe(200);
expect(Array.isArray(response.body)).toBe(true);
});

// Add more tests for updating and deleting products
});