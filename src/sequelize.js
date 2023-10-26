// src/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
dialect: 'sqlite',
storage: process.env.DB_NAME || 'database.sqlite',
});
module.exports = sequelize;
