const fs = require('fs').promises;  //on utilise fileSystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'hello Promise\r\n';

// 1. creer les repertoires qui n'existent pas
// 2. ecrire le fichier file.txt
// 3. lire le fichier file.txt

console.log(pathfile)
console.log(__dirname)
console.log(path.dirname(pathfile))


//callback hell
fs.mkdir(path.dirname(pathfile), {recursive:true}).then(() => {
    console.log('Les repertoires ont bien étés créés'.yellow)

    fs.writeFile(pathfile, content, {flag: 'a',});
}).then(() => {
    console.log("l'ecriture est terminé".yellow)

    return fs.readFile(pathfile)
}).then((data) => {
    console.log(data.toString('utf8'))
}).catch((err) => {
    console.log(err)
})