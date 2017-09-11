class Product {
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        console.log('Hi, i`m Product`s module instance named', this.name);
    }
}

module.exports = Product;
