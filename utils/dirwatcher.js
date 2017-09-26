const EventEmitter = require('events');
const fs = require('fs');

class DirWatcher extends EventEmitter {
    constructor(path) {
        super();
        this.dirContent = fs.readdirSync(path);
    }

    dirReader(path) {
        let tmpDir = this.dirContent;
        this.dirContent = fs.readdirSync(path);
        if (JSON.stringify(this.dirContent) !== JSON.stringify(tmpDir)){
            this.emit('dirwatcher:changed');
        }
    }

    watch(path, delay){
        setInterval(() => this.dirReader(path), delay);
    }

}

module.exports = DirWatcher;
