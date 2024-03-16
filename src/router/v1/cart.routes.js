const express = require('express');
const { getProducts } = require('../../controllers/cart.controller');

const cartRouter = express.Router();

cartRouter.get('/cart',validateGetAllProducts,getProducts);

