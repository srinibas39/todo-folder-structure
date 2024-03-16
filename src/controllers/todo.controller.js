


const todoService = new TodoService(new TodoRepository());

function getAllTodo(req,res){
    const response = todoService.getAll();
    res.status(200)
    .json({
        data : response
    })
}

function deleteAllTodo(req,res){
    const response = todoService.deleteAll();
    res.status(200)
    .json({
        data:response
    })
}

function updataTodo(req,res){
    const id = req.id;
    const todo = req.todo;
    const response = todoService.update(todo,id);
    res.status(200)
    .json({
        data:response
    })

}

function deleteTodo(req,res){
    const id = req.id;
    const  response = todoService.delete(id);
    res.status(200)
    .json({
        message:"successfully deleted todo"
    })

}

function getTodo(req,res){
    const id = req.id;
    const response = todoService.getAll(id);
    res.status(200)
    .json({
        data:response
    })
}

module.exports = {
    getAllTodo,
    getTodo,
    deleteAllTodo,
    deleteTodo,
    updataTodo
}