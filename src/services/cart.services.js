

//All the bussiness logic
class CartServices {

    constructor(cartRepository){
        this,cartRepository = cartRepository
    }

    create(todo){
        this.cartRepository.insert();
    }

    delete(id){
        this.cartRepository.delete(id)
    }

    get(id){
        this.cartRepository.get(id);
    }
}