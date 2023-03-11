import { readFileSync, writeFile } from 'fs';

const contents = readFileSync('./src/dictionary.txt', 'utf-8');
const arr = `const wordList =  ["${contents.split(/\r?\n/).join('"," ')}"] \n export default wordList`;

console.log(arr); 

writeFile('./src/wordList.js', arr, function (err) {
    if (err) throw err;
    console.log('Saved!');
});