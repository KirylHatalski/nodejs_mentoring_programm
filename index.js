const models = require('./models');
const config = require('./config/config.json');

const Importer = require('./utils/importer');

const importer = new Importer();
importer.init();
setInterval(() => console.log(importer.getFiles()), 5000);
