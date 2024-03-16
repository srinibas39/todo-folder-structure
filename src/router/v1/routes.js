const express = require('express');
const { todoRouter } = require('./todo.routes');

const routerV1 = express.router();

routerV1.use('/todo',todoRouter)

module.exports = {
    routerV1
}