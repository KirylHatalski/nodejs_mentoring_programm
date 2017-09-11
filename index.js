const { User, Product } = require('./models');
const config = require('./config/config.json');

const newUser = new User.User('newUser');
const newProduct = new Product.Product('newProduct');

console.log('App name is', config.name);
newUser.sayHi();
newProduct.sayHi();
