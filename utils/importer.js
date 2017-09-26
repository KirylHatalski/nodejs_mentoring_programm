const DirWatcher = require('./dirwatcher');
const fs = require('fs');


class Importer {
    constructor(){
        this.watcher = new DirWatcher('./data');
        this.files = {};
    }

    importFIles(){
      this.watcher.dirContent.forEach((elem, index) => {
        fs.readFile(`./data/${elem}`, 'utf-8', (err, file) => {
          if(err) return console.log(err);
          this.files[index] = file;
        });
      });
    }

    importFIlesSync(){
      this.watcher.dirContent.forEach((elem, index) => {
        this.files[index] = fs.readFileSync(`./data/${elem}`, 'utf-8');
      });
    }

    getFiles() {
      return this.files;
    }

    init(){
        this.watcher.watch('./data', 1000);
        this.watcher.on('dirwatcher:changed', () => {
          this.importFIlesSync();
        })
    }
}

module.exports = Importer;
