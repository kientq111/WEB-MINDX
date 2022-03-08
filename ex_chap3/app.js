const fs = require('fs');

fs.readFile('text1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
});

setTimeout(() => fs.readFile('text2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
}), 2000);


let dataInputFromUser = 'Hello Something Else';
fs.writeFileSync('writeFile.txt', dataInputFromUser);