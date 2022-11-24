//pour lancer l'appli Nodejs
//dans le terminal
// node path/to/file.js


const name = 'steph';
let city = 'lille';
const number = 10;

console.log('bhr' + name);
console.log('hello', "world", number);
console.log('salut %s, tu est toujours a %s', name, city); //different de js
//avec js normal
console.log(`salut ${name}, tu est tjrs a ${city}`) //version ES6

console.log(`__filename: ${__filename}`)
console.log(`__dirname: ${__dirname}`)

setTimeout( () => {
    console.log("j'ai été éxecuté après 1 seconde");
}, 1000)

console.log("fin de la page");