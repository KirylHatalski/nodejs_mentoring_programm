class User {
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        console.log('Hi, i`m User`s module instance named', this.name);
    }
}

module.exports = User;
