const fs = require('fs');
const minimist = require('minimist');
const through = require('through2');

const inputOutput = (filePath) => {
    const readStream = fs.createReadStream(filePath);
    readStream.on('error', err => console.error(err.message));
    readStream.pipe(process.stdout);
};

const transform = (file) => {
    process
        .stdin
        .pipe(through((chunk, enc, callback) => (
            callback(null, chunk.toString().toUpperCase())
        )))
        .pipe(process.stdout);
};

const args = minimist(process.argv.slice(2), {
    alias: {
        help: 'h',
        action: 'a',
        file: 'f'
    },
    unknown: arg => console.error(`Unknown option: ${arg}, use -h option for read usage notes`)
})

const printHelpMessage = () => (
    `Please use next commands:
        --action=io or -a io
        --action=read-file --file=path.to.file or -a read-file -f path.to.file
        --help or -h
    `
);

switch(args.action){
    case 'io':
        transform();
        break;
    case 'read-file':
        inputOutput(args.file);
        break;
    default:
        console.log(printHelpMessage());
}
