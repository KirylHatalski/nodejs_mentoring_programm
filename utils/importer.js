const DirWatcher = require('./dirwatcher');


class Importer {
    constructor(){
        this.watcher = new DirWatcher();
    }

    init(){
        this.watcher.watch('./data', 1000);
        this.watcher.on('dirwatcher:changed', () => {
            console.log(this.watcher.dirContent);
        })
    }
}

module.exports = Importer;