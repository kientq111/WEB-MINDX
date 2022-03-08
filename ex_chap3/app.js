const fs = require('fs');


let txt1 = fs.readFileSync('text1.txt', 'utf8');

console.log(txt1);

let txt2 = fs.readFileSync('text2.txt', 'utf8');
console.log(txt2);

fs.writeFileSync('writeFile.txt', `${txt1} + ${txt2}`);