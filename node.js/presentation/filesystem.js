const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'hello world\r\n';

// 1. creer les repertoires qui n'existent pas
// 2. ecrire le fichier file.txt
// 3. lire le fichier file.txt

console.log(pathfile)
console.log(__dirname)
console.log(path.dirname(pathfile))


//callback hell
fs.mkdir(path.dirname(pathfile), {recursive:true}, (error, ) => {
    if(error) {
        throw error; // throw = lancer/lever une exception; met fin au programme, c'est pour ca que dans le if il n'y a pas de else
    }
    console.log('les répertoires ont bien été créés'.yellow);

    fs.writeFile(pathfile, content, {flag: 'a',}, (error) => {
        if(error) {
            throw error;
        }
        console.log("l'ecriture est terminé".bgBlack.green)

        fs.readFile(pathfile, (err, data) => {
            if(err) throw err;

            // console.log(data.toString('utf8'));
            console.log(`${data}`);
        })
    });
});