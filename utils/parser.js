module.exports = function parseCSVtoJSON(csv) {
    let unbornJSON = [],
        lines = csv.split('\n'),
        headers = lines[0].split(','),
        cell = {};

    lines.forEach((line, index) => {
        if(index == 0) {
            return
        }
        let newField = line.split(',');

        newField.forEach((field, index) => {
            cell[headers[index]] = field;
        });
        unbornJSON.push(cell);
        cell = {};
    });

    return unbornJSON;
}