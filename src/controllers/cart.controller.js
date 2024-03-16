
//controller --> collect request and return response

const todoService = new CartServices(new cartRepository());

function getProducts(req,res){

    const newTodo = req.body;
    const response = todoService.create(newTodo);
    res.status(200)
    .json({
        msg:"Successfully added todo",
        data : response
    })

}

function deleteProducts(req,res){
    const id = req.params.id;
    const response = todoService.delete(id)
    res.status(200)
    .json({
        msg : `successfully deleted ${id}`
    })
}

module.exports = {
    getProducts,
    deleteProducts
}