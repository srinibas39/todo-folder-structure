

function valUpdateTodo(req,res,next){
    const id = req.params.id;
    const newTodo = req.body.todo;

    if(!newTodo || !newTodo.text || !newTodo.text){
       return res.json({
            msg:"Invalid request"
        })
    }

    next()

}

module.exports ={
    valUpdateTodo
}