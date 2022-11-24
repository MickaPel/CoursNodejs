const fs = require('fs').promises;  //on utilise fileSystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'hello Async await\r\n';

// IIFE (Immediatly invoked function expression)
( async () => { //fonction anonyme flechée
    try{
        await fs.mkdir(path.dirname(pathfile), {recursive:true});
        console.log('Les repertoires ont bien étés créés'.yellow);

        await fs.writeFile(pathfile, content, {flag: 'a',});
        console.log("l'ecriture est terminé".yellow);

        const data = await fs.readFile(pathfile);
        console.log(data.toString('utf8'))
    } catch(e) {
        console.log(e);
    }
})();