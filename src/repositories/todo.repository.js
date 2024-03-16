
const todos = []; // in mem db;

//yo

class TodoRepository {

    create(todo){
        todos.push(todo);
    }
    update(todo,id){
        const todoIdx = todos.findIdx((todo) => todo.id === id);

        if(todoIdx != -1){
            todos[todoIdx] = {...todo};
        }
        
    }
    delete(id){
        todos.filter(todo => todo.id === id)
    }
    getAll(){
        return todos;
    }
    deleteAll(){
        todos = [];
    }


}