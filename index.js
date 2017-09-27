const models = require('./models');
const config = require('./config/config.json');

const Importer = require('./utils/importer');

const newUser = new models.User('newUser');
const newProduct = new models.Product('newProduct');

console.log('App name is', config.name);
newUser.sayHi();
newProduct.sayHi();

const importer = new Importer();
importer.init();
