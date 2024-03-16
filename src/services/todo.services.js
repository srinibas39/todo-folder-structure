
//All the bussiness logic
class TodoService {
    
    constructor(todoRepository){
        this.todoRepository = todoRepository;
    }

    create(todo){
        //do validation
        if(todo.text.trim() !== ''){
            const newTodo = {
                ...todo,
                text:todo.text.trim()
            }
            this.todoRepository.create(todo);
        }
    }

    update(todo,id){
        this.todoRepository.update(todo,id);
    }

    delete(id){
        this.todoRepository.delete(id);
    }

    getAll(){
        this.todoRepository.getAll();
    }

    deleteAll(){
        this.todoRepository.deleteAll();
    }
}