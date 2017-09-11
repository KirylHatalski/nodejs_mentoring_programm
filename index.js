const models = require('./models');
const config = require('./config/config.json');

const newUser = new models.User('newUser');
const newProduct = new models.Product('newProduct');

console.log('App name is', config.name);
newUser.sayHi();
newProduct.sayHi();
