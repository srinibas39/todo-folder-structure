const express = require('express');
const { todoRouter } = require('./todo.routes');

const routerV1 = express.Router();

routerV1.use('/todo',todoRouter)

routerV1.use('/cart',)

module.exports = {
    routerV1
}