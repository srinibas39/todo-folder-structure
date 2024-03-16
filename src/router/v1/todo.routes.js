
const express = require('express');
const { getAllTodo, deleteAllTodo, updataTodo, getTodo } = require('../../controllers/todo.controller');
const { valUpdateTodo } = require('../../validators/todo.validator');

const todoRouter = express.router();

todoRouter.get('/todo',getAllTodo);

todoRouter.delete('/todo',deleteAllTodo);

todoRouter.post('/todo',valUpdateTodo ,updataTodo);

todoRouter.get('/todo:id',getTodo);

todoRouter.post('/todo:id',updataTodo);

module.exports = {
    todoRouter
}