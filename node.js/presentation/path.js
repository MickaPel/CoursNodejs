// require() est la fonction Node qui permet de recuperer des modules NodeJS
//defini dans l'application, dans les dependances (node_modules) ou dans l'api de node

const path = require('path');
require('colors');

const file = "./content/file.txt";

console.log(`dirname(): ${path.dirname(file).red}`); //afficher le répertoire parent
console.log(`basename(): ${path.basename(file).red}`); //afficher le nom du fichier
console.log(`extname(): ${path.extname(file).red}`); //afficher l'extension du fichier

console.log(`separateur système: ${path.sep.red}`)

//creer un chemin vers le fichier img.png, se trouvant dans un repertoire images,
//se trouvant dans un repertoire assets

const image = path.join('assets', 'images', 'image.png');
console.log(`Chemin vers mon image: ${image.green}`); //dans le terminal le lien s'affiche donc en vert

//creer le chemin absolu vers le fichier image.png
console.log(path.join(__dirname, image).green);
console.log(path.resolve(image).blue)
console.log(path.resolve('presentation', image).red)
