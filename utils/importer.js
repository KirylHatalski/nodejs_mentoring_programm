const DirWatcher = require('./dirwatcher');
const parseCSVtoJSON = require('./parser');
const fs = require('fs');


class Importer {
    constructor() {
        this.watcher = new DirWatcher('./data');
        this.files = [];
    }

    importFiles() {
        return new Promise((res, rej) => {
            this.watcher.dirContent.forEach(elem => {
                fs.readFile(`./data/${elem}`, 'utf-8', (err, file) => {
                    if (err) return rej(err);
                    this.files.push({[elem]: this.parseCSVtoJSON(file)});
                    if(this.files.length === this.watcher.dirContent.length) {
                        res(this.getFiles());
                    }
                });
            });
        });
    }

    importFilesSync() {
        this.watcher.dirContent.forEach(elem => {
            this.files[elem] = this.parseCSVtoJSON(fs.readFileSync(`./data/${elem}`, 'utf-8'));
        });
    }

    parseCSVtoJSON(csv) {
        return parseCSVtoJSON(csv);
    }

    getFiles() {
        return JSON.stringify(this.files);
    }

    init() {
        this.importFiles();
        this.watcher.watch('./data', 1000);
        this.watcher.on('dirwatcher:changed', () => {
            this.files = [];
            this.importFiles().then(data => console.log(data));
            // this.importFilesSync();
            // console.log(this.getFiles());
        });
    }
}

module.exports = Importer;
